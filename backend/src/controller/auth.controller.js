const userServices = require("../services/user.services.js");
const cartServices = require("../services/cart.services.js");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    console.log(req.body);
    const user = await userServices.createUser(req.body);
    const jwt = jwtProvider.generateToken(user.id);
    await cartServices.createCart(user);
    return res.status(200).send({ jwt, message: "register success" });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userServices.findUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .send({ message: "user not found with email", email });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(404).send({ message: "Invalid Password..." });
    }
    const jwt = jwtProvider.generateToken(user.id);

    return res.status(200).send({ jwt, message: "login success" });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = { register, login };
