const reviewService = require("../services/review.services.js");

const createReview = async (req, res) => {
  const user = req.user;
  try {
    const review = await reviewService.createReview(req.body, user);
    return res.status(201).send(review);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const getAllReview = async (req, res) => {
  const productId = req.params.productId;
  try {
    const reviews = await reviewService.getAllReview(productId);
    return res.status(201).send(reviews);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = { createReview, getAllReview };
