const express = require('express');
const router = express.Router();
const portsController = require("../../controllers/portsController");
const mdaController = require("../../controllers/mdaController");


router.get('/ports', portsController.getPorts)
router.get('/mdaports', mdaController.getmdaPorts)


module.exports = router;
