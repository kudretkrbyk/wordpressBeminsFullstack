const pool = require("../config/db");

const create = async (name, parentId) => {
  const query =
    "INSERT INTO subCategories (name, parent_id) VALUES ($1, $2) RETURNING *";
  const values = [name, parentId];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { create };
