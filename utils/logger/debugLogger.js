const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const winstonMysql = require("winston-mysql");
require("dotenv").config();



const debugLogger = () => {

  //Declaring format of logs, want to save
  const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });

  //creating pool for saving logs to db
  const options_default = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
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

module.exports = debugLogger;