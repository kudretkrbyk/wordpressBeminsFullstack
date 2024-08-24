const express = require("express");
const pool = require("../../config/db");
const router = express.Router();

// Renk güncelleme işlemi
router.put("/", async (req, res) => {
  try {
    const colorsList = req.body; // Frontend'den gelen renk listesi

    if (!Array.isArray(colorsList)) {
      return res.status(400).json({ message: "Geçersiz veri formatı." });
    }

    const updatedColors = [];

    for (const color of colorsList) {
      const { id, name } = color; // Her bir renk için id ve name alıyoruz

      if (!name) {
        return res
          .status(400)
          .json({ message: "Lütfen id ve name alanlarını doldurun." });
      }

      const query = "UPDATE colors SET name = $1 WHERE id = $2 RETURNING *";
      const values = [name, id];
      const result = await pool.query(query, values);

      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Renk bulunamadı." });
      }

      updatedColors.push(result.rows[0]); // Güncellenen rengi sakla
    }

    res
      .status(200)
      .json({ message: "Renkler başarıyla güncellendi.", updatedColors });
  } catch (error) {
    console.error("Sunucu Hatası:", error);
    res.status(500).json({ message: "Sunucu Hatası, lütfen tekrar deneyin." });
  }
});

module.exports = router; // Router'ı dışa aktar
