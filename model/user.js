var connect = require('../config/connect');

module.exports.insert = function (obj,cb) {
	connect.init(function(err,client){
		var db = client.db("angular");
		db.collection("user").insert(obj,cb);
	});
}

module.exports.find = function (cb) {
	connect.init(function(err,client){
		var db = client.db("angular");
		db.collection("user").find().toArray(cb);
	});
}

module.exports.remove = function (obj,cb) {
	connect.init(function(err,client){
		var db = client.db("angular");
		db.collection("user").remove(obj,cb);
	});
}

module.exports.update = function (where,obj,cb) {
	connect.init(function(err,client){
		var db = client.db("angular");
		db.collection("user").update(where,{$set:obj},cb);
	});
}