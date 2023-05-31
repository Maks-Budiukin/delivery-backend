const { Order } = require("../../models");
const { catchAsync } = require("../../services");

const getAll = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const orders = await Order.find({ client: id }).populate({
    path: "cart",
    populate: {
      path: "product",
      model: "product",
    },
  });

  res.json({
    data: orders,
  });
});

module.exports = getAll;
