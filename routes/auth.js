const router = require("express").Router();
const discordAuthRouter = require("./discordAuth");

router.use("/discord", discordAuthRouter)

router.get("/data", (req,res) => {
  res.json(req.user || null);
});

router.get('/logout', (req, res) => {
	req.session.destroy();
	res.redirect("/");
});

module.exports = router;