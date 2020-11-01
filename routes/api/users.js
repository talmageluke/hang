const express = require("express");
const passport = require("passport")
const router = express.Router();
const flash = require('connect-flash')




router.post("/register", passport.authenticate("signup"), (req, res) => {
    res.json(req.flash("error"))
});


router.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.flash("error"))



});

router.get('/', passport.authenticate('local'), (req, res) => {
    res.status(200).json({
        success: `logged in as ${req.user.email}`
    });
});




// router.post("/createhang", (req, res) => {
//     res.json(req.flash("error"))
// });


// router.post("/joinHang", (req, res) => {
//     res.json(req.flash("error"))



// });


module.exports = router;
