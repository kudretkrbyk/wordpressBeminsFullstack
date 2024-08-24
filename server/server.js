const express = require("express");
const cors = require("cors");
require("dotenv").config();

const getProducts = require("./src/api/get/getProducts");
const getCategories = require("./src/api/get/getCategories");
const postColors = require("./src/api/post/postColors");
const updateProductOptions = require("./src/api/post/updateProductOptions");
const getColors = require("./src/api/get/getColors");
const getSizes = require("./src/api/get/getSizes");
const updateProductImages = require("./src/api/post/updateProductImages");
const getFullProducts = require("./src/api/get/getFullProducts");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// get istekleri

app.get("/products", getProducts);
app.get("/categories", getCategories);
app.get("/colors", getColors);
app.get("/sizes", getSizes);
app.get("/fullProducts", getFullProducts);

app.get("/", (req, res) => {
  res.send("API is running...");
});

//post istekleri
app.use("/api/colors", postColors);
app.post("/updateProductOptions", updateProductOptions);
app.post("/updateProductImages", updateProductImages);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
