const express = require("express");
const { loginUser } = require("../controllers/UserControllers");
const router = express.Router();
router.get("/user/login", loginUser);

module.exports = router;