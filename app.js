var express = require("express");
var app = express();
var parser = require("body-parser");

app.set("view engine","ejs");

app.use(parser());
app.use(express.static(__dirname+"/public"));
app.use(require("./config/routes"));

app.listen(3000,function() {
	console.log("running");
});