const router = require("express").Router();
const post = require("./post-routes");

//http:localhost:3001/api

router.use("/post", post);

router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
