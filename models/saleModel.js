
const pool = require('../config/database');

const Sale = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM sales');
    return rows;
  },

  create: async (product) => {
    const [result] = await pool.query('INSERT INTO sales SET ?', product);
    return { id: result.insertId, ...product };
  },

  update: async (id, product) => {
    await pool.query('UPDATE sales SET ? WHERE id = ?', [product, id]);
    return { id, ...product };
  }
};

module.exports = Sale;