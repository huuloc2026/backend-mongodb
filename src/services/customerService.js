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
const getAllCustomerService = async (limit, page) => {
  try {
    let AllUser = null;
    if (limit && page) {
      const skipClient = (page - 1) * limit;
      AllUser = await Customer.find({}).skip(skipClient).limit(limit).exec();
    } else {
      AllUser = await Customer.find({});
    }
    return AllUser;
  } catch (error) {
    return res.status(200).json({
      error: error,
      data: null,
    });
  }
};

const DeleteCustomerService = async (customerData) => {
  try {
    let DeleteCustomer = await Customer.findOneAndDelete({ _id: customerData });
    return DeleteCustomer;
  } catch (error) {
    return res.status(400).json(err);
  }
};

const UpdateCustomerService = async (customerData) => {
  try {
    let UpdateCustomer = await Customer.findOneAndUpdate(
      {
        _id: customerData.id,
      },
      {
        name: customerData.name,
        phone: customerData.phone,
        email: customerData.email,
        address: customerData.address,
        city: customerData.city,
        description: customerData.description,
        image: customerData.image,
      },
      { new: true } // Options of moogose
    );
    return UpdateCustomer;
  } catch (error) {
    return res.status(400).json(err);
  }
};
module.exports = {
  CreateCustomerService,
  CreateListCustomerService,
  getAllCustomerService,
  DeleteCustomerService,
  UpdateCustomerService,
};
