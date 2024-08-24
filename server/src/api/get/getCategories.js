const pool = require("../../config/db");

const getCategories = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        c.id AS category_id, 
        c.name AS category_name, 
        c.image AS category_image, 
        s.id AS subcategory_id, 
        s.name AS subcategory_name 
      FROM 
        categories c
      LEFT JOIN 
        subcategories s 
      ON 
        c.id = s.parent_id
    `);

    // Verileri organize et
    const categories = {};

    result.rows.forEach((row) => {
      const {
        category_id,
        category_name,
        category_image,
        subcategory_id,
        subcategory_name,
      } = row;

      if (!categories[category_id]) {
        categories[category_id] = {
          id: category_id,
          name: category_name,
          image: category_image,
          subcategories: [],
        };
      }

      if (subcategory_id) {
        categories[category_id].subcategories.push({
          id: subcategory_id,
          name: subcategory_name,
        });
      }
    });

    res.json(Object.values(categories));
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Server Error");
  }
};

module.exports = getCategories;
