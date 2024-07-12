const Review = require("../models/review.model.js");
const productServices = require("../services/product.services.js");

const createReview = async (reqData, user) => {
  try {
    const product = await productServices.findProductById(reqData.productId);
    const review = new Review({
      user: user._id,
      product: product._id,
      review: reqData.review,
      createdAt: new Date(),
    });
    await product.save();
    return await review.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllReview = async (productId) => {
  const product = await productServices.findProductById(reqData.productId);
  return await Review.find({ product: productId }).populate("user");
};

module.exports = { getAllReview, createReview };
