const Category = require("../models/categoryModel");

const addCategory = async (req, res) => {
  try {
    const categoryData = req.body;

    if (!categoryData || !Array.isArray(categoryData)) {
      return res.status(400).json({ message: "Geçersiz veri formatı." });
    }

    for (const category of categoryData) {
      const { name, image } = category;

      if (!name || !image) {
        return res
          .status(400)
          .json({ message: "Lütfen tüm alanları doldurun." });
      }

      const newCategory = await Category.create(name, image);
    }

    res.status(201).json({ message: "Kategoriler başarıyla eklendi." });
  } catch (error) {
    console.error("Sunucu Hatası:", error);
    res.status(500).json({ message: "Sunucu Hatası, lütfen tekrar deneyin." });
  }
};

module.exports = { addCategory };
