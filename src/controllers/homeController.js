const express = require("express");
const connection = require("../config/database");
const {
  getAllUsers,
  getUserbyID,
  updateUserByID,
  deleteUserbyID,
} = require("../services/CRUDservice");
const User = require("../models/user");
const getHomepage = async (req, res) => {
  const rows = await User.find({});
  res.render("home.ejs", { listResult: rows });
};

const getCreateNewUser = (req, res) => res.render("create.ejs");

const postCreateNewUser = async (req, res) => {
  const { inputLastName, inputFirstName, inputEmail, inputAddress, inputCity } =
    req.body;

  try {
    await User.create({
      lastname: inputLastName,
      firstname: inputFirstName,
      email: inputEmail,
      address: inputAddress,
      city: inputCity,
    });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

const getUpdateNewUser = async (req, res) => {
  // const user = await getUserbyID(req.params._id);
  const userID = req.params;
  let user = await User.findById(userID.id).exec();
  res.render("update.ejs", { userUpdate: user });
};

const postUpdateUser = async (req, res) => {
  const {
    inputLastName,
    inputFirstName,
    inputEmail,
    inputAddress,
    inputCity,
    UserID,
  } = req.body;
  await User.updateOne(
    { _id: UserID },
    {
      lastname: inputLastName,
      firstname: inputFirstName,
      address: inputAddress,
      email: inputEmail,
      city: inputCity,
    }
  );

  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userID = await req.params.id;

  // console.log(userID.id);
  let user = await User.findById(userID).exec();
  res.render("delete.ejs", { userUpdate: user });
};

const postHandleSubmitDel = async (req, res) => {
  const userID = req.body.UserID;

  await User.deleteOne({ _id: userID });
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getCreateNewUser,
  postCreateNewUser,
  getUpdateNewUser,
  postUpdateUser,
  postDeleteUser,
  postHandleSubmitDel,
};
