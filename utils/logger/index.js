const debugLogger = require("./debugLogger");

let logger = null;

if (process.env.NODE_ENV !== 'production') {
    logger = debugLogger();
}

module.exports = logger;