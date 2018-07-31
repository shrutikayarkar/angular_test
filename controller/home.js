var express = require("express");
var router = express.Router();

router.get("/",function (req,res) {
	var pagedata = {title:"home",pagename:"home/index"};
	res.render("layout",pagedata);
});
	
module.exports = router;