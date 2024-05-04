const app = require("./app");
const logger = require("./utils/logger/index");
require("dotenv").config()
// require("./utils/cronJob")


const PORT = process.env.PORT || 9000;

logger.warn("log Information")
logger.info("log Information")
logger.debug("log Information")


app.listen(PORT, ()=>{
    logger.info(`The server is running on http://localhost:${PORT}`)
})