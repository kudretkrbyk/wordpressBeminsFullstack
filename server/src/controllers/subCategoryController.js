const SubCategory = require("../models/subCategoryModel");

const addSubCategory = async (req, res) => {
  try {
    const subCategoryData = req.body;

    if (!subCategoryData || !Array.isArray(subCategoryData)) {
      return res.status(400).json({ message: "Geçersiz veri formatı." });
    }

    for (const subCategory of subCategoryData) {
      const { name, parent_id } = subCategory;

      if (!name || !parent_id) {
        return res
          .status(400)
          .json({ message: "Lütfen tüm alanları doldurun." });
      }

      const newSubCategory = await SubCategory.create(name, parent_id);
    }

    res.status(201).json({ message: "Alt kategoriler başarıyla eklendi." });
  } catch (error) {
    console.error("Sunucu Hatası:", error);
    res.status(500).json({ message: "Sunucu Hatası, lütfen tekrar deneyin." });
  }
};

module.exports = { addSubCategory };
