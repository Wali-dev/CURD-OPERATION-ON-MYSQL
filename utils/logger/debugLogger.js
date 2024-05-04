const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const winstonMysql = require("winston-mysql");
require("dotenv").config();



const debugLogger = () => {

  const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });

  const options_default = {
    host: 'localhost',
    user: 'root',
    password: 'demopass123',
    database: 'test_db',
    table: 'sys_logs_default'
};


  return logger = createLogger({

    level: 'debug',
    format: combine(
      timestamp({ format: "HH:mm:ss"}),
      myFormat
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console(),
      new winstonMysql(options_default),
    ],
  });
}

module.exports = debugLogger