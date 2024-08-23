const Product = require("../models/productModel");

const addProduct = async (req, res) => {
  try {
    const productData = req.body;

    if (!productData || !Array.isArray(productData)) {
      return res.status(400).json({ message: "Geçersiz veri formatı." });
    }

    for (const product of productData) {
      const { name, definition, price, discount, date, sku } = product;

      // Alanların boş olup olmadığını kontrol et
      if (!name || !definition || !price || !sku) {
        return res
          .status(400)
          .json({ message: "Lütfen tüm alanları doldurun." });
      }

      // Ürünü veritabanına ekle
      await Product.create(name, definition, price, discount, date, sku);
    }

    res.status(201).json({ message: "Ürünler başarıyla eklendi." });
  } catch (error) {
    console.error("Sunucu Hatası:", error);
    console.error("Hata Detayı:", error.message); // Hata detayını yazdır
    res.status(500).json({ message: "Sunucu Hatası, lütfen tekrar deneyin." });
  }
};

module.exports = { addProduct };
