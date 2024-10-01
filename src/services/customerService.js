const Customer = require("../models/customer");

const CreateCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      phone: customerData.phone,
      email: customerData.email,
      address: customerData.address,
      city: customerData.city,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
const CreateListCustomerService = async (array) => {
  try {
    ///Note: array must be array object
    let result = await Customer.insertMany(array);
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
module.exports = { CreateCustomerService, CreateListCustomerService };
