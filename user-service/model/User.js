const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  adresse: { type: String, required: false },
  roles: { type: Array, required: true },
  birthDate: { type: Date, required: true },
  image: { type: String, required: false },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: null },
  deleted_at: { type: Date, required: true, default: null },
  blocked_to: { type: Date, required: true, default: null },
});
const User = model("users", userSchema);
module.exports = User;
