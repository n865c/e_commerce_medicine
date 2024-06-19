const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.TOKEN_SECRET_KEY, {
    expiresIn: "48h",
  });
  return token;
};
const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
  return decodedToken.userId;
};

module.exports = { generateToken, getUserIdFromToken };
