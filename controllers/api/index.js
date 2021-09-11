const router = require("express").Router();
const entry = require("./post-routes");

//http:localhost:3001/api

router.use("/post", entry);

module.exports = router;
