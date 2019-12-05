const express = require('express');
const router = express.Router();
const portsController = require("../../controllers/portsController");
const portsPutController = require("../../controllers/portsPutController");
const opensController = require("../../controllers/opensController");
const mdasController = require("../../controllers/mdasController");

router.get('/ports', portsController.getPorts)
router.get('/opens', opensController.getOpens)
router.get('/mdas', mdasController.getmdas)

router
.route('/opens/:id')
.get(portsPutController.findById)
// .put(portsPutController.update)






module.exports = router;
