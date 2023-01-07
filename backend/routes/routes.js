const express = require("express");
const PriceAlerts = require("../model/priceAlerts");
const gasAlerts = require("../model/gasAlerts");

const router = express.Router();
router.post("/price", async (req, res) => {
  // Create a new alert
  const alert = new PriceAlerts(req.body);
  console.log(req.body);
  try {
    await alert.save();
    res.send(alert);
  } catch (error) {
    res.send(error);
  }
});

router.get("/create", async (req, res) => {
  // Get all alerts
  try {
    const alerts = await gasAlerts.find();
    res.send(alerts);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
