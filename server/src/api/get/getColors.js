// server/api/get/getDeneme.js
const pool = require("../../config/db");

const getColors = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM colors");
    res.json(result.rows);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Server Error");
  }
};

module.exports = getColors;
