const User = require("../models/user");

const {
  uploadSingleFile,
  uploadMultiFile,
} = require("../services/fileService");

const getUsersAPI = async (req, res) => {
  const rows = await User.find({});
  return res.status(200).json({
    error: 0,
    data: rows,
  });
};
const postCreateNewUserAPI = async (req, res) => {
  const { inputLastName, inputFirstName, inputEmail, inputAddress, inputCity } =
    req.body;

  try {
    let user = await User.create({
      lastname: inputLastName,
      firstname: inputFirstName,
      email: inputEmail,
      address: inputAddress,
      city: inputCity,
    });
    return res.status(200).json({
      error: 0,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

const putUpdateUserAPI = async (req, res) => {
  const {
    inputLastName,
    inputFirstName,
    inputEmail,
    inputAddress,
    inputCity,
    UserID,
  } = req.body;
  let user = await User.updateOne(
    { _id: UserID },
    {
      lastname: inputLastName,
      firstname: inputFirstName,
      address: inputAddress,
      email: inputEmail,
      city: inputCity,
    }
  );
  return res.status(200).json({
    error: 0,
    data: user,
  });
};

const deleteUserAPI = async (req, res) => {
  const userID = req.body.UserID;

  let user = await User.deleteOne({ _id: userID });
  return res.status(200).json({
    error: 0,
    data: user,
  });
};

const postUploadFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  const fileCheckpoint = req.files.img;

  {
    fileCheckpoint.length >= 2
      ? await uploadMultiFile(req.files.img)
      : await uploadSingleFile(req.files.img);
  }

  return res.send("upload Success");
};

module.exports = {
  getUsersAPI,
  postCreateNewUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadFileAPI,
};
