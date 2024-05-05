const pool = require('../config/database');

const Sale = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM sales');
    return rows;
  },

  create: async (sale) => {
    const [result] = await pool.query('INSERT INTO sales SET ?', sale);
    return { id: result.insertId, ...sale };
  }
};

module.exports = Sale;