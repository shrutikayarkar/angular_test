var express = require("express");
var router = express.Router();
var user = require("../model/user");
var mongo = require("mongodb");

router.post("/",function (req,res) {
	user.insert(req.body,function(err,result){
		console.log(result);
		res.send(result.ops[0]);
	});
});

router.get("/",function(req,res){
	user.find(function(err,result){
		res.send(result);
	});
});

router.delete("/",function(req,res){
	user.remove({ _id : mongo.ObjectId(req.query.id)},function(err,result){
		res.send(result);
	});
});

router.put("/",function(req,res){
	var id = req.body._id;
	delete req.body._id;
	user.update({_id : mongo.ObjectId(id)}, req.body, function(err,result){
		res.send(result);
	});
});
	
module.exports = router;