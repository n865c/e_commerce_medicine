const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const authRouters = require("./routes/auth.route.js");
const userRouters = require("./routes/user.route.js");
const productRouter = require("./routes/product.route.js");
const adminProductRouter = require("./routes/adminProduct.route.js");
const cartRouter = require("./routes/cart.route.js");
const cartItemRouter = require("./routes/cartItem.route.js");
const orderRouter = require("./routes/order.route.js");
const adminOrderRouter = require("./routes/adminOrder.route.js");
const reviewRouter = require("./routes/review.route.js");
const ratingRouter = require("./routes/rating.route.js");

// app.use("/", (req, res) => {
//   res.send({ message: "your e-commerce medicine backend is ready to start" });
// });

app.use("/auth", authRouters);
app.use("/api/user", userRouters);
app.use("/api/products", productRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/orders", orderRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);

module.exports = app;
