const router = require("express").Router();
const allPortsController = require("../../controllers/allPortsController");

router.route("/allPorts")
  .get(allPortsController.findAll)
//   .post(booksController.create);

module.exports = router;
