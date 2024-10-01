const mongoose = require("mongoose");
//shape data
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: String,
    image: String,
    email: String,
    address: String,
    city: String,
    description: String,
  },
  { timestamps: true }
);
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
