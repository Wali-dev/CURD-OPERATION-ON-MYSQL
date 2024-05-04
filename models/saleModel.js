
const pool = require('../config/database');

const Sale = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM sales');
    return rows;
  },

  create: async (product) => {
    const [result] = await pool.query('INSERT INTO sales SET ?', product);
    return { id: result.insertId, ...product };
  }
};

module.exports = Sale;