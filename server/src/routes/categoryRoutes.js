const express = require("express");
const {
  addCategoriesWithSubCategories,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/categories-with-subcategories", addCategoriesWithSubCategories);

module.exports = router;
