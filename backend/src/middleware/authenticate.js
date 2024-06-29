const jwtProvider = require("../config/jwtProvider.js");

const userServices = require("../services/user.services.js");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(404).send({ error: "token is not found..." });
    }
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = userServices.findUserById(userId);
    req.user = user;
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
  next();
};
module.exports = authenticate;
