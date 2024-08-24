// server/api/post/updateProductOptions.js
const pool = require("../../config/db");

const updateProductOptions = async (req, res) => {
  const selectedOptions = req.body;

  try {
    for (let productId in selectedOptions) {
      const { color, size } = selectedOptions[productId];

      if (color) {
        await pool.query(
          "INSERT INTO product_colors (product_id, color_id) VALUES ($1, $2) ON CONFLICT DO NOTHING",
          [productId, color]
        );
      }

      if (size) {
        await pool.query(
          "INSERT INTO product_sizes (product_id, size_id) VALUES ($1, $2) ON CONFLICT DO NOTHING",
          [productId, size]
        );
      }
    }
    res.status(200).send("Seçimler başarıyla güncellendi.");
  } catch (err) {
    console.error("Error updating product options:", err);
    res.status(500).send("Server Error");
  }
};

module.exports = updateProductOptions;
