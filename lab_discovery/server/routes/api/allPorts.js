const express = require('express');
const router = express.Router();
const allPortsController = require("../../controllers/allPortsController");

// this route is just used to get allports
router.get('/allPorts', allPortsController.getallPorts)

module.exports = router;
