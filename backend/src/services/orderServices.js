const Address = require("../models/address.model.js");
const Order = require("../models/order.model.js");
const cartService = require("../services/cart.services.js");
const orderItem = require("../models/orderItems.js");

const createrOrder = async (user, shipAddress) => {
  try {
    let address;
    if (shipAddress._id) {
      let existAddress = await Address.findById(shipAddress._id);
      address = existAddress;
    } else {
      address = new Address(shipAddress);
      address.user = user;
      await address.save();
      user.address.push(address);
      await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];
    for (const item of cart.cartItems) {
      const orderIt = new orderItem({
        price: item.price,
        product: item.product,
        quantity: item.quantity,
        weight: item.weight,
        userId: item.userId,
        discountPrice: item.discountedPrice,
      });

      const createOrderItem = await orderIt.save();
      
      orderItems.push(createOrderItem);
    }

    const createOrder = new Order({
      user,
      orderItems,
      totalPrice: cart.totalPrice,
      totalDiscountedPrice: cart.totalDiscountedPrice,
      discount: cart.discount,
      totalItem: cart.totalItem,
      shipAddress: address,
    });
    const saveOrder = await createOrder.save();
    return saveOrder;
  } catch (err) {
    throw new Error(err.message);
  }
};

const placeOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderid);
    order.orderStatus = "PLACED";
    order.paymentDetails.status = "COMPLETED";
    return await order.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

const shipOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderid);
    order.orderStatus = "SHIPPED";
    return await order.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

const confirmedOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "CONFIRMED";
    return await order.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

const deliverOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "DELIVERED";
    return await order.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

const cancelOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "CANCELLED";
    return await order.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

const findOrderById = async (orderId) => {
  try {
    const order = await Order.findById(orderId)
      .populate("user")
      .populate({ path: "orderItems", populate: { path: "product" } })
      .populate("shippingAddress");
  } catch (err) {
    throw new Error(err.message);
  }
};

const usersOrderHistory = async (userId) => {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return orders;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllOrders = async () => {
  try {
    return await Order.find()
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteOrders = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createrOrder,
  placeOrder,
  confirmedOrder,
  shipOrder,
  deliverOrder,
  cancelOrder,
  findOrderById,
  usersOrderHistory,
  getAllOrders,
  deleteOrders,
};
