const { User } = require("./User");
const { regJoiSchema } = require("./User");
const { loginJoiSchema } = require("./User");

module.exports = {
  User,
  regJoiSchema,
  loginJoiSchema,
};
