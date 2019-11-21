const router = require("express").Router();
// const bookRoutes = require("./books");
const allPortsRoutes = require("./allPorts");
// Book routes
// router.use("/books", bookRoutes);
router.use("/allPorts", allPortsRoutes);

module.exports = router;
