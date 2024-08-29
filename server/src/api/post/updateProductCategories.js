// server/api/post/updateProductCategories.js
const pool = require("../../config/db");

const updateProductCategories = async (req, res) => {
  const { productId, categoryId, subcategoryId } = req.body;

  try {
    // Ürünün kategorisini güncelle
    await pool.query(`UPDATE products SET category_id = $1 WHERE id = $2`, [
      categoryId,
      productId,
    ]);

    // Ürün ve alt kategori eşleştirmesini ekle
    await pool.query(
      `INSERT INTO product_subcategories (product_id, subcategory_id) VALUES ($1, $2) ON CONFLICT DO NOTHING`,
      [productId, subcategoryId]
    );

    res
      .status(200)
      .send("Kategori ve Alt Kategori Eşleştirmesi Başarıyla Güncellendi");
  } catch (err) {
    console.error("Error updating product categories:", err);
    res.status(500).send("Server Error");
  }
};

module.exports = updateProductCategories;
