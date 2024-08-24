// server/api/get/getFullProducts.js
const pool = require("../../config/db");

const getFullProducts = async (req, res) => {
  try {
    // Ürünleri al ve ilgili kategori ve alt kategori isimlerini al
    const productsResult = await pool.query(`
      SELECT 
        p.id, 
        p.name, 
        p.definition, 
        c.id AS category_id, 
        c.name AS category_name, 
        sc.id AS subcategory_id, 
        sc.name AS subcategory_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      LEFT JOIN subcategories sc ON p.sub_category_id = sc.id
    `);

    const products = productsResult.rows;

    // Renkleri al
    const colorsResult = await pool.query(`
      SELECT pc.product_id, c.id AS color_id, c.name AS color_name
      FROM product_colors pc
      LEFT JOIN colors c ON pc.color_id = c.id
    `);
    const productColors = colorsResult.rows;

    // Bedenleri al
    const sizesResult = await pool.query(`
      SELECT ps.product_id, s.id AS size_id, s.size 
      FROM product_sizes ps
      LEFT JOIN sizes s ON ps.size_id = s.id
    `);
    const productSizes = sizesResult.rows;

    // Ürün fotoğraflarını al
    const imagesResult = await pool.query(`
      SELECT pi.product_id, pi.image_url 
      FROM product_images pi
    `);
    const productImages = imagesResult.rows;

    // Ürünleri organize et
    const fullProducts = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.definition,
        category: {
          id: product.category_id,
          name: product.category_name,
        },
        subcategory: {
          id: product.subcategory_id,
          name: product.subcategory_name,
        },
        colors: productColors
          .filter((pc) => pc.product_id === product.id)
          .map((pc) => ({ id: pc.color_id, name: pc.color_name })),
        sizes: productSizes
          .filter((ps) => ps.product_id === product.id)
          .map((ps) => ({ id: ps.size_id, size: ps.size })),
        images: productImages
          .filter((pi) => pi.product_id === product.id)
          .map((pi) => pi.image_url),
      };
    });

    res.json(fullProducts);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Server Error");
  }
};

module.exports = getFullProducts;
