const express = require("express");
const router = express.Router();

const {
  getHomepage,
  postCreateNewUser,
  getCreateNewUser,
  getUpdateNewUser,
  postUpdateUser,
  postDeleteUser,
  postHandleSubmitDel,
} = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/create", getCreateNewUser);

router.post("/create-user", postCreateNewUser);
//
router.get("/update/:id", getUpdateNewUser);

router.post("/update/:id", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user/", postHandleSubmitDel);

module.exports = router;
