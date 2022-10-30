// for mongo in node js first install (npm install mongodb)
var MongoClieent = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/Mongo"
MongoClieent.connect(url,(err,db)=>{
                if(err) throw err;
                console.log("connected successfuly...")
                db.close();
            })