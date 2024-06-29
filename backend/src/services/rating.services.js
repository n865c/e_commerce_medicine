const Rating = require("../models/rating.model.js");
const productServices = require("../services/product.services.js");

const createRating = async (req, user) => {
  try {
    const product = await productServices.findProductById(req.productId);
    const rating = new Review({
      user: user._id,
      product: product._id,
      rating: req.rating,
      createdAt: new Date(),
    });

    return await rating.save();
  } catch (err) {
    throw new Error(err.message);
  }
};


const getProductRating = async (productId) => {
  return await Rating.find({ product: productId });
};

module.exports = { getProductRating, createRating };
