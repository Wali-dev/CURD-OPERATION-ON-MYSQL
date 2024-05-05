const app = require("./app");
const logger = require("./utils/logger/index");
require("dotenv").config();
require("./utils/cronJob");


const PORT = process.env.PORT || 9000;


app.listen(PORT, ()=>{
    logger.info(`The server is running on http://localhost:${PORT}`);
})