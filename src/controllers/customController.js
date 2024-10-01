const {
  uploadSingleFile,
  uploadMultiFile,
} = require("../services/fileService");

const {
  CreateCustomerService,
  CreateListCustomerService,
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

    if (fileCheckpoint.length >= 2) {
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
};
