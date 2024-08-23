const { query } = require("../config/db");

const Product = {
  create: async (productData) => {
    const {
      ad,
      aciklama,
      fiyat,
      colors,
      size,
      SKU,
      kategori,
      altKategori,
      marka,
      tag,
      indirim,
      indirimBitis,
      puan,
      tarih,
      fotograflar,
    } = productData;

    const result = await query(
      `INSERT INTO products (ad, aciklama, fiyat, colors, size, SKU, kategori, altKategori, marka, tag, indirim, indirimBitis, puan, tarih, fotograflar)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`,
      [
        ad,
        aciklama,
        fiyat,
        colors,
        size,
        SKU,
        kategori,
        altKategori,
        marka,
        tag,
        indirim,
        indirimBitis,
        puan,
        tarih,
        fotograflar,
      ]
    );
    return result.rows[0];
  },
};

module.exports = Product;
