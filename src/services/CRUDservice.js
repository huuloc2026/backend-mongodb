const connection = require("../config/database");
const getAllUsers = async () => {
  const syntaxSQL = `Select * from Persons`;
  const [rows, fields] = await connection.query(syntaxSQL);
  return rows;
};
const getUserbyID = async (userID) => {
  const [rows, fields] = await connection.query(
    `Select * from Persons where PersonID = ?`,
    [userID]
  );
  let user = rows && rows.length > 0 ? rows[0] : {};
  return user;
};

const updateUserByID = async (
  lastName,
  email,
  firstName,
  address,
  city,
  userID
) => {
  const syntaxSQL = `Update Persons Set LastName = ?, FirstName= ?,email =?,Address=?,City=? where PersonID=?`;
  try {
    const [rows, fields] = await connection.query(syntaxSQL, [
      lastName,
      firstName,
      email,
      address,
      city,
      userID,
    ]);
    console.log("Update sucess with", userID);
  } catch (error) {
    console.error(error);
  }
};

const deleteUserbyID = async (userID) => {
  const syntaxSQL = `Delete from Persons where PersonID=?`;
  const [result, fields] = await connection.query(
    `Delete from Persons where PersonID=?`,
    [userID]
  );
};

//
module.exports = {
  getAllUsers,
  getUserbyID,
  updateUserByID,
  deleteUserbyID,
};
