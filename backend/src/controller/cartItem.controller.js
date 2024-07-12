const cartItemService = require("../services/cartItem.services.js");

const updateCartItem = async (req, res) => {
  const user = await req.user;
  try {
    const updateCartItem = await cartItemService.updateCartItem(
      user._id,
      req.params.id,
      req.body
    );
    return res.status(201).send(updateCartItem);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const removeCartItem = async (req, res) => {
  const user = await req.user;
  try {
    // await removeItemService.removeCartItem(user._id, req.params.id);
    
    await cartItemService.removeCartItem(user._id, req.params.id);
    return res.status(201).send({ message: "cart item removed successfully" });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = { updateCartItem, removeCartItem };
