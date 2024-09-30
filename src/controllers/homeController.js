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
  const rows = [];
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
    res.send("Success create MongoDB");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

const getUpdateNewUser = async (req, res) => {
  const user = await getUserbyID(req.params.userID);
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
  await updateUserByID(
    inputLastName,
    inputEmail,
    inputFirstName,
    inputAddress,
    inputCity,
    UserID
  );
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const user = await getUserbyID(req.params.userID);
  res.render("delete.ejs", { userUpdate: user });
};

const postHandleSubmitDel = async (req, res) => {
  await deleteUserbyID(req.body.UserID);
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
