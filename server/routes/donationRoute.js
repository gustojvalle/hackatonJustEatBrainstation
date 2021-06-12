const express = require("express");

const donationRoute = express.Router();

donationRoute.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

donationRoute.post("/:restaurandID", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = donationRoute;
