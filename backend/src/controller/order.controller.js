const orderService = require("../services/orderServices.js");

const createOrder = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await orderService.createrOrder(user, req.body);
    return res.status(201).send(createdOrder);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const findOrderById = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await orderService.findOrderById(req.params.id);
    return res.status(201).send(createdOrder);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const orderHistory = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await orderService.findOrderById(req.params.id);
    return res.status(201).send(createdOrder);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = { createOrder, findOrderById, orderHistory };
