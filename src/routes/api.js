const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateNewUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/user", getUsersAPI);
routerAPI.post("/user", postCreateNewUserAPI);

module.exports = routerAPI;
