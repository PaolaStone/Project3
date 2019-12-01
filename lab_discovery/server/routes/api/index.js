const express = require('express');
const router = express.Router();
const portsController = require("../../controllers/portsController");
const mdaController = require("../../controllers/mdaController");
const opensController = require("../../controllers/opensController");


router.get('/ports', portsController.getPorts)
router.get('/opens', opensController.getOpens)

router.get('/mdaports', mdaController.getmdaPorts)



module.exports = router;
