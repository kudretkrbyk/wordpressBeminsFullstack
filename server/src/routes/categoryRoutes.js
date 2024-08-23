const express = require("express");
const { addCategory } = require("../controllers/categoryController");

const router = express.Router();

router.post("/categories", addCategory);

module.exports = router;
