
const users = [
    {
        "name":"John Doe",
        "username":"john.doe",
        "password":"Password1",
        "email":"john.doe@gmail.com",
        "isActive":true
    },
    {
        "name":"David Doe",
        "username":"david.doe",
        "password":"Password1",
        "email":"david.doe@gmail.com",
        "isActive":false
    },
    {
        "name":"asd",
        "username":"asd",
        "password":"asd",
        "email":"asd@gmail.com",
        "isActive":false
    }
];

module.exports.getAll = (req,res)=>{
    res.status(200).send(users);
}

module.exports.signup=(req, res)=>{
    let user = req.body;
    if(!user.email || !user.password){
        return res.status(400).send("Email and Password is required");
    }
    users.push(req.body);
    return res.status(200).send();
}

module.exports.signin=(req, res)=>{
    let user = req.body;
    if(!user.username || !user.password){
        return res.status(400).send("username and Password is required");
    }
    let foundUser = users.find(i=> i.username==user.username && i.password==user.password);
    if(!foundUser){
        return res.status(400).send("username or Password is incorrect");
    }else{
        return res.status(200).send();
    }
}

module.exports.activate = (req, res)=>{
    const name = req.params.username;
    let foundUserIndex = users.findIndex(c=> c.username==name);
    users[foundUserIndex].isActive=true;
    res.status(200).send(users);
}

module.exports.deActivate = (req, res)=>{
    const name = req.params.username;
    let foundUserIndex = users.findIndex(c=> c.username==name);
    users[foundUserIndex].isActive=false;
    res.status(200).send(users);

    
}

module.exports.delete = (req, res)=>{
    const name = req.params.username;
    let founduserIndex = users.findIndex(c=> c.username==name);
    users.splice(founduserIndex, 1);  
    res.status(200).send(users);
    
}

module.exports.update = (req, res)=>{
    // const user = req.body;
    // console.log(user);
    // let founduserIndex = users.findIndex(c=> c._id==user._id);
    // console.log(founduserIndex);
    // console.log(user);
    // users[founduserIndex]=user;
    // res.status(200).send(users);
    console.log(req);
}