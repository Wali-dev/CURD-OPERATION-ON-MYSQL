// const fs = require('fs');

const logger = (error, message) => {
  const logMessage = `${new Date().toISOString()} - ${error}: ${message}\n`;



//   fs.appendFile('error.log', logMessage, (err) => {
//     if (err) console.error('Error writing to log file:', err);
//   });
};

module.exports = logger;