const Product = require("../models/productModel");

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Ürün eklenirken hata oluştu" });
  }
};

module.exports = { addProduct };
