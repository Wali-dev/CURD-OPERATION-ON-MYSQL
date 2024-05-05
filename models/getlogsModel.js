const pool = require('../config/database');


const getAlllogs = async () => {
  const [rows] = await pool.query('SELECT * FROM sys_logs_default');
  return rows;
}



module.exports = getAlllogs;