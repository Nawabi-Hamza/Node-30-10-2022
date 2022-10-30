var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/Mongo"
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo = db.db('Mongo')
    // var myObj = {
    //     name:"Hamza",
    //     title:"My name is Ali and this is the fist mongo",
    //     body:"this is the body of mongo database example"
    // }
    var myObj = {
        name:"Hamza",
        title:"My name is Shafi and this is the work of NOSQL work",
        body:"this is the body of mongo database example"
    }
    dbo.collection("Blog").insertOne(myObj,(err,res)=>{
        if(err) throw err;
        console.log("The first document or record is inserted")
        db.close();
    })
    
   

})