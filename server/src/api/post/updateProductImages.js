// server/api/post/updateProductImages.js
const pool = require("../../config/db");

const updateProductImages = async (req, res) => {
  const { productId, imageUrls } = req.body; // imageUrls bir dizi olarak gelecek

  try {
    for (let url of imageUrls) {
      await pool.query(
        "INSERT INTO product_images (product_id, image_url) VALUES ($1, $2)",
        [productId, url]
      );
    }
    res.status(200).send("Ürün fotoğrafları başarıyla güncellendi.");
  } catch (err) {
    console.error("Error updating product images:", err);
    res.status(500).send("Server Error");
  }
};

module.exports = updateProductImages;
