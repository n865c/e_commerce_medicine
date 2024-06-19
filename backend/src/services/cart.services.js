const Cart = require("../models/cart.model.js");

const createCart = async (user) => {
  try {
    const cart = new Cart({ user });
    const createCart = await cart.save();
    return createCart;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {createCart};
