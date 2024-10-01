const mongoose = require("mongoose");
//shape data
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    phone: String,
    image: String,
    email: String,
    address: String,
    city: String,
  },
  { timestamps: true }
);
const User = mongoose.model("Customer", customerSchema);

module.exports = Customer;
