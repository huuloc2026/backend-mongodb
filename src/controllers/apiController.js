const User = require("../models/user");
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
    let newUser = await User.create({
      lastname: inputLastName,
      firstname: inputFirstName,
      email: inputEmail,
      address: inputAddress,
      city: inputCity,
    });
    return res.status(200).json({
      error: 0,
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

module.exports = { getUsersAPI, postCreateNewUserAPI };
