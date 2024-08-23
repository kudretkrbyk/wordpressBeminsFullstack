const pool = require("../config/db");

const create = async (name, image) => {
  const query =
    "INSERT INTO categories (name, image) VALUES ($1, $2) RETURNING *";
  const values = [`${name}`, `${image}`]; // Dizi formatında
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { create };
