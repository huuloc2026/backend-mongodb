const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateNewUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
} = require("../controllers/apiController");

/// CRUD user api
routerAPI.get("/user", getUsersAPI);
routerAPI.post("/user", postCreateNewUserAPI);
routerAPI.put("/user", putUpdateUserAPI);
routerAPI.delete("/user", deleteUserAPI);

module.exports = routerAPI;
