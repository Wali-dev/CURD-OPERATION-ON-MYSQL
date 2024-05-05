const getAlllogs = require("../models/getlogsModel");
const logger = require("../utils/logger/index");

const logs= async (req, res) => {
    try {
        const logs = await getAlllogs();
        res.send(logs);
    } catch (error) {
        res.status(500).json({ error: error.message });
        logger.debug("Can not fetch log from Db, File: logController.js");
    }
}

module.exports = logs;

