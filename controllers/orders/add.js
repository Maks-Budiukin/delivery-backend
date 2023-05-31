const { Product, User, Order } = require("../../models");
const { catchAsync } = require("../../services");
const { BadRequest } = require("http-errors");

const add = catchAsync(async (req, res, next) => {
  const { cart, user, total } = req.body;

  let totalPrice = 0;

  const getTotalPrice = async () => {
    let rawTotalPrice = 0;

    for (const item of cart) {
      const product = await Product.findById(item.product);
      rawTotalPrice += product.price * item.quantity;
      console.log(rawTotalPrice, "INSIDE FOROF");
    }
    totalPrice = parseFloat(rawTotalPrice.toFixed(2));
  };
  await getTotalPrice();

  if (totalPrice !== total) {
    console.log(totalPrice, "INSIDE CHECK");
    return next(BadRequest("WRONG SUM"));
  }

  const existUser = await User.findOneAndUpdate(
    { email: user.email },
    {
      email: user.email,
      name: user.name,
      phone: user.phone,
    },
    {
      upsert: true,
      new: true,
    }
  );

  const order = await Order.create({
    cart,
    totalPrice,
    client: existUser._id,
  });

  //   await order.populate({
  //     path: "cart",
  //     populate: {
  //       path: "product",
  //       model: "product",
  //     },
  //   });

  res.status(201).json({
    data: order,
  });
});

module.exports = add;
