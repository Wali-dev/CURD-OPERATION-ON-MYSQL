const express = require("express");
const logs = require("../controllers/logsController");
const router = express.Router();


router.get("/", logs);



module.exports = router;