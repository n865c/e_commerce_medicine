const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const authRouters = require("./routes/auth.route.js");
const userRouters = require("./routes/user.route.js");


// app.use("/", (req, res) => {
//   res.send({ message: "your e-commerce medicine backend is ready to start" });
// });

app.use("/auth", authRouters);
app.use("/api/user", userRouters);

module.exports = app;
