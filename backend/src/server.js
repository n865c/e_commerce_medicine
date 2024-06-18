const app = require(".");
const database = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  await database();
  console.log(`e-commerce medicine api is listening on port ${PORT} `);
});
