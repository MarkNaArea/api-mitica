const express = require("express");

const userControllers = require("../controllers/usersControllers");

const router = express.Router();

router
    .route("/login")
    .post(userControllers.loginUser);

router
    .route("/register")
    .post(userControllers.registerUser);

module.exports = router;
