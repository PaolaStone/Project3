const express = require('express');
const router = express.Router();
const portsController = require("../../controllers/portsController");

// this route is just used to get the user basic info
router.get('/ports', portsController.getPorts)



module.exports = router;
