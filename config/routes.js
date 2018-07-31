var express = require("express");
var router = express.Router();

router.use("/",require("../controller/home"));
router.use("/userwebservice",require("../controller/userwebservice"));

module.exports = router;