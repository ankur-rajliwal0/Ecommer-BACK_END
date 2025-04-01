const express = require("express");
const { signup, login } = require("../controllers/User/auth/index.js");
const UserRoutes = express.Router();

UserRoutes.post("/signup", signup);
UserRoutes.post("/login", login);

module.exports = UserRoutes;
