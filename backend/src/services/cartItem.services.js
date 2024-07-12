const userServices = require("../services/user.services.js");
const cartItemModel = require("../models/cartItem.model.js");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await (await findCartItemById(cartItemId)).populate("product");
    // const item = await CartItem.findById(cartItemId).populate('product');

    if (!item) {
      throw new Error("cart item not found:", cartItemId);
    }

    const user = await userServices.findUserById(item.userId);
    if (!user) {
      throw new Error("user not found :", userId);
    }
    if (user._id.toString() === userId.toString()) {
      const weightData = item?.product?.weight?.find(
        (weight) =>
          weight.name === cartItemData.name &&
          weight.quantity >= cartItemData.quantity
      );
      if (!weightData) {
        throw new Error(
          "weight not found for the given weight name and quantity"
        );
      }
      const discountPercent = item.product.discountPercent || 0;
      // Ensure quantity is a valid number
      if (isNaN(cartItemData.quantity) || cartItemData.quantity <= 0) {
        throw new Error("Invalid quantity");
      }

      // Ensure price and discount calculations are valid
      const calculatedPrice = weightData.price;
      if (isNaN(calculatedPrice) || calculatedPrice < 0) {
        throw new Error("Invalid weight data price");
      }

      const calculatedDiscountedPrice =
        calculatedPrice * (1 - discountPercent / 100);
      if (isNaN(calculatedDiscountedPrice) || calculatedDiscountedPrice < 0) {
        throw new Error("Invalid discounted price calculation");
      }

      item.quantity = cartItemData.quantity;
      item.price = item.quantity * calculatedPrice;
      item.discountedPrice = item.quantity * calculatedDiscountedPrice;
      item.weight = weightData.name;
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
      return await cartItemModel.findByIdAndDelete(cartItemId);
    }

    throw new Error("you cant remove another user's item");
  } catch (err) {
    throw new Error(err.message);
  }
};

const findCartItemById = async (cartItemId) => {
  try {
    //see later on
    const cartItem = await cartItemModel.findById(cartItemId);

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
