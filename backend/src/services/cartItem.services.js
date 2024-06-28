const userServices = require("../services/user.services.js");
const cartItemModle = require("../models/cartItem.model.js");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error("cart item not found:", cartItemId);
    }
    const user = await userServices.findUserById(item.userId);
    if (!user) {
      throw new Error("user not found :", userId);
    }
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discoutedPrice = item.quantity * item.product.discoutedPrice;
      //item.weight= cartItemData.weight;
      const updateCartItem = await item.save();
      return updateCartItem;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
const removeCartItem = async (userId, cartItemId) => {
  try {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userServices.findUserById(userId);
    if (user._id.toString() === cartItem.userId.toString()) {
      await cartItem.findByIdAndDelete(cartItemId);
    }
    throw new Error("you cant remove another user's item");
  } catch (err) {
    throw new Error(err.message);
  }
};

const findCartItemById = async (cartItemId) => {
  try {
    //see later on
    const cartItem = await cartItemModle.findById(cartItemId);

    if (cartItem) {
      return cartItem;
    } else {
      throw new Error("cartItem not found with id", cartItemId);
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
module.exports = { updateCartItem, removeCartItem, findCartItemById };
