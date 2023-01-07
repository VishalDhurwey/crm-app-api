
const express = require("express");
const customerRoutes = require("./routes/customerRoutes");
const server = express();

server.listen(4000);

server.use("/api/customer",customerRoutes.router);

server.get("/", (req, res)=>{
    res.send("Welcome to CRM API");
});

console.log("Server is listening on 4000");