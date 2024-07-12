const { model } = require("mongoose");
const orderServices = require("../services/orderServices.js");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderServices.getAllOrders();
    return res.status(201).send(orders);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const confirmedOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderServices.confirmedOrder(orderId);
    return res.status(201).send(orders);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const shipOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderServices.shipOrder(orderId);
    return res.status(201).send(orders);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const deliverOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderServices.deliverOrder(orderId);
    return res.status(201).send(orders);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const cancelledOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderServices.cancelOrder(orderId);
    return res.status(201).send(orders);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const deleteOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderServices.deleteOrders(orderId);
    return res.status(201).send(orders);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllOrders,
  confirmedOrders,
  shipOrders,
  deliverOrders,
  cancelledOrders,
  deleteOrders,
};
