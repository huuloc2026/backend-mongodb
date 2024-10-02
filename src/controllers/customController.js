const {
  uploadSingleFile,
  uploadMultiFile,
} = require("../services/fileService");

const {
  CreateCustomerService,
  CreateListCustomerService,
  getAllCustomerService,
  DeleteCustomerService,
  UpdateCustomerService,
} = require("../services/customerService");
// { key : value}
module.exports = {
  postNewCustomerAPI: async (req, res) => {
    let { name, phone, email, address, city, description } = await req.body;

    let imageResult = "";

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const fileCheckpoint = req.files.image;

    if (Array.isArray(fileCheckpoint) && fileCheckpoint.length > 1) {
      let result = await uploadMultiFile(req.files.image);
      console.log(result);
    } else {
      let path = await uploadSingleFile(req.files.image);
      imageResult = path;
      // console.log(">>>>imageResult", imageResult);
    }
    let customerData = {
      name,
      phone,
      email,
      address,
      city,
      description,
      image: imageResult,
    };
    let newCustomer = await CreateCustomerService(customerData);
    return res.status(200).json({
      error: 0,
      data: newCustomer,
    });
  },
  postListNewCustomerAPI: async (req, res) => {
    try {
      const listResult = await CreateListCustomerService(req.body.customer);
      return res.status(200).json({
        error: 0,
        NewData: listResult,
      });
    } catch (error) {
      return res.status(400).json({
        error: error,
        NewData: null,
      });
    }
  },
  getAllCustomerAPI: async (req, res) => {
    try {
      let { limit, page, name } = req.query;
      let AllUser = null;
      if (limit && page) {
        AllUser = await getAllCustomerService(limit, page, name, req.query);
        return res.status(200).json({
          error: 0,
          data: AllUser,
        });
      } else {
        AllUser = await getAllCustomerService();
        return res.status(200).json({
          error: 0,
          data: AllUser,
        });
      }
    } catch (error) {
      return res.status(400).json({
        error: error,
        data: null,
      });
    }
  },
  PostDeleteCustomerAPI: async (req, res) => {
    try {
      let IDofCustomer = await req.body.id;
      let result = await DeleteCustomerService(IDofCustomer);
      return res.status(200).json({
        error: 0,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        error: error,
        return: null,
      });
    }
  },
  PostUpdateCustomerAPI: async (req, res) => {
    try {
      let result = await UpdateCustomerService(req.body);
      return await res.status(200).json({
        error: 0,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        error: error,
        return: null,
      });
    }
  },
};
