const ratingService = require("../services/rating.services.js");

const createRating = async (req, res) => {
  const user = req.user;
  try {
    const rating = await ratingService.createRating(req.body, user);
    return res.status(201).send(rating);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

// const getProductRating = async (req, res) => {
//   const productId = req.params.productId;
//   try {
//     const rating = await ratingService.getProductRating(productId);
//     return res.status(201).send(rating);
//   } catch (err) {
//     return res.status(500).send({ error: err.message });
//   }
// };

module.exports = { createRating };
