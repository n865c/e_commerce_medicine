const productServices = require("../services/product.services.js");

const createProduct = async (req, res) => {
  try {
    const product = await productServices.createProduct(req.body);

    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productServices.deleteProduct(productId);
    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productServices.updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const findProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productServices.findProductById(productId);
    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productServices.getAllProducts(req.query);
    console.log("product", products);
    return res.status(201).send(products);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const createMultipleProduct = async (req, res) => {
  try {
    const products = await productServices.createMultipleProduct(req.body);
    return res.status(201).send({ message: "Products Created Successfully" });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
};
