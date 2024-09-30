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
router.get("/update/:userID", getUpdateNewUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:userID", postDeleteUser);
router.post("/delete-user/", postHandleSubmitDel);

module.exports = router;
