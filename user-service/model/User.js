const { Schema, model } = require("mongoose");
const userSchema = new Schema({});
const User = model("users", userSchema);
module.exports = User;
