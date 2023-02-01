
const customers= [
    {
        "name":"Infosys",
        "website":"www.infosys.com",
        "ceo":"Uknown",
        "employees":"200000",
        "year":"1995",
        "turnover":"100000000",
        "status":"New"
    },
    {
        "name":"TCS",
        "website":"www.tcs.com",
        "ceo":"Uknown",
        "employees":"300000",
        "year":"1995",
        "turnover":"200000000",
        "status":"Accepted"
    },
    {
        "name":"IRCTC",
        "website":"www.irctc.com",
        "ceo":"GOI",
        "employees":"500000",
        "year":"1925",
        "turnover":"200000000",
        "status":"Rejected"
    }
];

module.exports.get = (req, res)=>{
    res.status(200).send(customers);
}

module.exports.add = (req, res)=>{
    const customer = req.body;
    customers.push(customer);
    res.status(200).send(customers);
}

module.exports.update = (req, res)=>{
    const customer = req.body;
    let foundCustomerIndex = customers.findIndex(c=> c.name==customer.name);
    customers[foundCustomerIndex]=customer;
    console.log(customers);
    res.status(200).send(customers);
}

module.exports.delete = (req, res)=>{
    const name = req.params.name;
    let foundCustomerIndex = customers.findIndex(c=> c.name==name);
    customers.splice(foundCustomerIndex, 1);
    console.log(customers);
    res.status(200).send(customers);
}

