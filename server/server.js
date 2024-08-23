const express = require("express");
const cors = require("cors");
require("dotenv").config();

const categoryRoutes = require("./src/routes/categoryRoutes");
const productRoutes = require("./src/routes/productRoutes");
const subCategoryRoutes = require("./src/routes/subCategoryRoutes");
const getProducts = require("./src/api/get/getProducts");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// get istekleri

app.get("/products", getProducts);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
