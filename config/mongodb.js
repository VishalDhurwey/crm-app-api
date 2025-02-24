
// 1. Import mongodb driver.
const mongodb = require("mongodb");

// 2. Get mongodb client.
const client = mongodb.MongoClient;

// 3. Define URL
//const url = "mongodb://localhost:27017/crmdb";

const url = "mongodb+srv://vldhurwey:123zxcroot@cluster0.ivoha.mongodb.net/?retryWrites=true&w=majority&appName=cluster0";

let resultClient;

// 4. connect to mongodb.
module.exports.connect = ()=>{
    client.connect(url)
        .then((result)=>{
            resultClient=result;
            console.log("Mongodb is connected");
        })
        .catch(err=>{
            console.log(err);
        });
}

module.exports.getCollection = (name)=>{
    return resultClient.db("crmdb").collection(name);
}