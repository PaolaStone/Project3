const express = require('express');
const router = express.Router();
const portsController = require("../../controllers/portsController");
const portsPutController = require("../../controllers/portsPutController");
const opensController = require("../../controllers/opensController");
const mdaController = require("../../controllers/mdaController");

router.get('/ports', portsController.getPorts)
router.get('/opens', opensController.getOpens)

router
.route('/opens/:id')
.get(portsPutController.findById)
// .put(portsPutController.update)


// router.get('/mdaports', mdaController.getmdaPorts)



module.exports = router;
