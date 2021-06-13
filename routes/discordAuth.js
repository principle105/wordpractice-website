const router = require("express").Router();
const passport = require("passport");

router.get("/login", passport.authenticate("discord", {
  successRedirect: "/",
  failureRedirect: "/"
}));

module.exports = router;