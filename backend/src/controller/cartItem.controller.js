const cartItemService = require("../services/cartItem.services.js");

const updateCartItem = async (req, res) => {
  const user = req.user;
  try {
    const updateCartItem = await cartItemService.updateCartItem(
      user._id,
      req.params.id,
      req.body
    );
    return res.status(200).send(updateCartItem);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};
