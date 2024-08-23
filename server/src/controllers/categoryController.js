const Category = require("../models/categoryModel");
const SubCategory = require("../models/subCategoryModel");

const addCategoriesWithSubCategories = async (req, res) => {
  try {
    const categoryData = req.body;

    if (!categoryData || !Array.isArray(categoryData)) {
      return res.status(400).json({ message: "Geçersiz veri formatı." });
    }

    const categoryIds = {}; // Kategori isimlerine göre ID'leri saklayacağız

    // Önce ana kategorileri ekleyelim
    for (const category of categoryData) {
      const { name, image, subcategories } = category;

      if (!name || !image) {
        return res
          .status(400)
          .json({ message: "Lütfen tüm alanları doldurun." });
      }

      // Kategoriyi veritabanına ekle
      const newCategory = await Category.create(name, image);
      categoryIds[name] = newCategory.id; // Kategori adını ve ID'sini sakla

      // Eğer alt kategoriler varsa, her birini ekleyelim
      if (subcategories && subcategories.length > 0) {
        for (const subcategoryName of subcategories) {
          await SubCategory.create(subcategoryName, newCategory.id); // parent_id olarak ana kategorinin ID'sini kullan
        }
      }
    }

    res
      .status(201)
      .json({ message: "Kategoriler ve alt kategoriler başarıyla eklendi." });
  } catch (error) {
    console.error("Sunucu Hatası:", error);
    res.status(500).json({ message: "Sunucu Hatası, lütfen tekrar deneyin." });
  }
};

module.exports = { addCategoriesWithSubCategories };
