var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
module.exports.init = function (cb) {
	mongo.connect(url,cb);
}