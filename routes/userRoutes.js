
const express = require("express");
const controller = require("../controller/userController");

const router = express.Router();

router.post("/signup", controller.signup);
router.post("/signin", controller.signin);
router.get("/", controller.getAll);
router.put("/activate/:username", controller.activate);
router.put("/deActivate/:username", controller.deActivate);
router.delete("/delete/:username", controller.delete);
router.delete("/edit/:username", controller.update);


module.exports.router = router;