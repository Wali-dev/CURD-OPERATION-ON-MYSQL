const pool = require('../config/database');

const Product = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM products');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (product) => {
    const [result] = await pool.query('INSERT INTO products SET ?', product);
    return { id: result.insertId, ...product };
  },

  update: async (id, product) => {
    await pool.query('UPDATE products SET ? WHERE id = ?', [product, id]);
    return { id, ...product };
  },

  delete: async (id) => {
    await pool.query('DELETE FROM products WHERE id = ?', [id]);
  }
};

module.exports = Product;