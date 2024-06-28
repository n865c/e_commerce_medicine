const Cart = require("../models/cart.model.js");
const cartItem = require("../models/cartItem.model.js");
const Product = require("../models/product.model.js");

const createCart = async (user) => {
  try {
    const cart = new Cart({ user });
    const createCart = await cart.save();
    return createCart;
  } catch (err) {
    throw new Error(err.message);
  }
};

//User model _id fname lastname..
// findUserCart(user._id) get cart detail
const findUserCart = async (userId) => {
  try {
    let cart = await Cart.findOne({ user: userId });
    let cartItems = await cartItem
      .find({ cart: cart._id })
      .populate("product")
      .exec();

    cart.cartItems = cartItems;
    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }
    cart.totalPrice = totalPrice;
    cart.discount = totalPrice - totalDiscountedPrice;
    cart.totalItem = totalItem;

    return cart;
  } catch (err) {
    throw new Error(err.message);
  }
};

const addCartItem = async (userId, req) => {
  try {
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);
    const isPresent = await cartItem.findOne({
      cart: cart._id,
      product: product._id,
      userId,
    });
    if (!isPresent) {
      const cartItem = new cartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        weight: req.weight,
        discountedPrice: product.discountedPrice,
      });
      const createdCartItem = await cartItem.save();
      cart.cartItems.push(createdCartItem);
      await cart.save();
      return "Item added to cart";
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { createCart, findUserCart, addCartItem };
