const express = require("express");
const UserRoutes = require("./UserRoutes.js");
const routes = express.Router();

routes.use("/User", UserRoutes);

module.exports = routes;
