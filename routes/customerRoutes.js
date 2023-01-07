
const express = require("express");
const controller = require("../controller/customerController");

const router = express.Router();

router.get("/", controller.get);

module.exports.router = router;