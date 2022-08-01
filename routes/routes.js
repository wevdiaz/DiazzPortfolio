const express = require("express");
const route = express.Router();

const PortfolioController = require("../controllers/PortfolioController");

route.get("/", PortfolioController.home );
route.get("/about", PortfolioController.about );
route.get("/portfolio", PortfolioController.portfolio );
route.get("/skills", PortfolioController.skill );
route.get("/contact", PortfolioController.contact );

module.exports = route;