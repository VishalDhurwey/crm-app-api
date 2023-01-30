
const mongodb = require("../config/mongodb");

module.exports.add = (customer, cb)=>{
    const collection = mongodb.getCollection("customer");
    collection.insertOne(customer)
        .then((res)=>{
            cb();
        });
}