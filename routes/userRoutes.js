const express = require("express");
const router = express.Router();
const { home, aboutus, createUser } = require("../controllers/userController");

router.get("/", home);
router.get("/aboutus", aboutus);

router.post("/createUser", createUser);
//router.post("/deleteUser", deleteUser);

module.exports = router;    