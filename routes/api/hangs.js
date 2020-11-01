const express = require("express");
const router = express.Router();
const flash = require('connect-flash')
const Hang = require("../../models")
const hangController = require("../../controller/hangController")




// router.post("/createhang", Hang, (req, res) => {
//     res.json(req.flash("error"))
// });


// router.post("/joinhang", Hang, (req, res) => {
//     res.json(req.flash("error"))
// });

router.route("/")
    .get(hangController.findAll)
    .post(hangController.create);

// Matches with "/api/hangs/:id"
router
    .route("/:id")
    .get(hangController.findById)
    .put(hangController.update)
    .delete(hangController.remove);





module.exports = router;
