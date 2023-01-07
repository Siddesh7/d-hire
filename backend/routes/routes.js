const express = require("express");
const JobRequests = require("../model/createJobReq");

const router = express.Router();
router.post("/create", async (req, res) => {
  // Create a new alert
  const jobs = new JobRequests(req.body);
  console.log(req.body);
  try {
    await jobs.save();
    res.send(jobs);
  } catch (error) {
    res.send(error);
  }
});

router.get("/create", async (req, res) => {
  // Get all alerts
  try {
    const jobs = await JobRequests.find();
    res.send(jobs);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
