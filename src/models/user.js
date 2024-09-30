const mongoose = require("mongoose");
//shape data
const userSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  email: String,
  address: String,
  city: String,
});
const User = mongoose.model("user", userSchema);

module.exports = User;
