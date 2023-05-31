const { User } = require("./User");
const { regJoiSchema } = require("./User");
const { loginJoiSchema } = require("./User");
const { Product } = require("./Product");
const { productJoiSchema } = require("./Product");
const { Order } = require("./Order");
const { orderJoiSchema } = require("./Order");

module.exports = {
  User,
  regJoiSchema,
  loginJoiSchema,
  Product,
  productJoiSchema,
  Order,
  orderJoiSchema,
};
