const router = require("express").Router();
const portsController = require("../../controllers/portsController");

router.route('/ports')
    .get(portsController.getPorts)

router
    .route('/ports/:id')
    .get(portsController.update)
    .put(portsController.update)

// For Reserve
router.route('/opens')
    .get( portsController.getOpens)
router.route('/mdas')
    .get( portsController.getmdas)

module.exports = router;
