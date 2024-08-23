const express = require("express");
const { addSubCategory } = require("../controllers/subCategoryController");

const router = express.Router();

router.post("/subcategories", addSubCategory);

module.exports = router;
