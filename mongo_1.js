var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/Mongo"
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo = db.db("Mongo")
    dbo.createCollection("Blog",(err,res)=>{
        if(err) throw err;
        console.log("Blog Created Successfuly")
        db.close()
    })
})