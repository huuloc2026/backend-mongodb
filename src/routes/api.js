const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateNewUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadFileAPI,
} = require("../controllers/apiController");

/// CRUD user api
routerAPI.get("/user", getUsersAPI);
routerAPI.post("/user", postCreateNewUserAPI);
routerAPI.put("/user", putUpdateUserAPI);
routerAPI.delete("/user", deleteUserAPI);
//file
routerAPI.post("/file", postUploadFileAPI);

module.exports = routerAPI;
