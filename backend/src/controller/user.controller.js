const userServices = require("../services/user.services.js");

const getUserProfile = async (req, res) => {
  try {
    const jwt = req.headers.authorization?.split(" ")[1];
    if (!jwt) {
      return res.status(404).send({ error: "token not found" });
    }
    const user = await userServices.findUserProfileByToken(jwt);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};


const getAllUsers = async (req, res) => {
  try {
    const user = await userServices.findAllUser();
    return res.status(201).send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};


module.exports = { getAllUsers, getUserProfile };
