const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateNewUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadFileAPI,
} = require("../controllers/apiController");

const {
  postNewCustomerAPI,
  postListNewCustomerAPI,
} = require("../controllers/customController");

/// CRUD user api
routerAPI.get("/user", getUsersAPI);
routerAPI.post("/user", postCreateNewUserAPI);
routerAPI.put("/user", putUpdateUserAPI);
routerAPI.delete("/user", deleteUserAPI);
///
//========Customer
//API - Upload file
routerAPI.post("/file", postUploadFileAPI);
//Create new customer
routerAPI.post("/customers", postNewCustomerAPI);
routerAPI.post("/listcustomers", postListNewCustomerAPI);

module.exports = routerAPI;
