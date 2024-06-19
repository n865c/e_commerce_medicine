const bcrypt = require("bcrypt");
const userModel = require("../models/user.model.js");
const { getUserIdFromToken } = require("../config/jwtProvider");

const createUser = async (userData) => {
  try {
    console.log(userData);
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
      throw new Error("User already exist with email:", email);
    }
    password = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password,
    });
    console.log("created user", user);
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await userModel.findById(userId).populate("addresses").exec();
    if (!user) {
      throw new Error("User not found with id :", user);
    }
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};
const findUserByEmail = async (email) => {
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found with email :", user);
    }
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const findUserProfileByToken = async (token) => {
  try {
    const userId = getUserIdFromToken(token);
    const user = await userModel.findById( userId );
    if (!user) {
      throw new Error("User is not exist");
    }
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};
const findAllUser = async () => {
  try {
    const users = await userModel.find();
    if (!users) {
      throw new Error("Users are not exist");
    }
    return users;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createUser,
  findUserById,
  findUserByEmail,
  findUserProfileByToken,
  findAllUser,
};
