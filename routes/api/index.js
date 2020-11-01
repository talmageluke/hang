const router = require("express").Router();
const hangRoutes = require("./hangs");

// Book routes
router.use("/hangs", hangRoutes);

module.exports = router;
