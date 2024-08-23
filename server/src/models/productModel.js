const pool = require("../config/db");

const create = async (name, definition, price, discount, date, sku) => {
  const query =
    "INSERT INTO products (name, definition, price, discount, date, sku) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
  const values = [name, definition, price, discount, date, sku]; // categoryId eklemeyi unutmayın
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { create };
