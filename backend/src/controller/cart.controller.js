const cartService = require("../services/cart.services");

const findUserCart = async (req, res) => {
  const user = req.user;
  try {
    const cart = await cartService.findUserCart(user._id);
    return res.status(201).send(cart);
  } catch (err) {
    return res.status(200).send({ error: err.message });
  }
};

const addItemToCart = async (req, res) => {
  const user = req.user;
  try {
    const cartItem = await cartService.addCartItem(user._id, req.body);
    return res.status(201).send(cartItem);
  } catch (err) {
    return res.status(200).send({ error: err.message });
  }
};

module.exports = {
  findUserCart,
  addItemToCart,
};
