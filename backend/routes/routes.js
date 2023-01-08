const express = require("express");
const { NotifScheduler } = require("../cronHandlerPush");
const JobRequests = require("../model/createJobReq");
const jobManager = require("../model/jobManager");

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
  if (req.query.company !== undefined && req.query.role !== undefined) {
    console.log(req.query.wallet, req.query.company, req.query.role);
    try {
      const jobsApplied = await JobRequests.find({
        candidateAddress: req.query.wallet,
        Company: req.query.company,
        Role: req.query.role,
      });
      res.send(jobsApplied);
    } catch (error) {
      res.send(error);
    }
  } else {
    try {
      const jobsApplied = await JobRequests.find({
        candidateAddress: req.query.wallet,
      });
      const manager = await JobRequests.find({ manager: req.query.wallet });
      res.send({ jobsApplied: jobsApplied, manager: manager });
    } catch (error) {
      res.send(error);
    }
  }
});

router.post("/jobmanager", async (req, res) => {
  // Create a new alert
  const jobs = new jobManager(req.body);

  console.log(req.body);
  try {
    await jobs.save();
    res.send(jobs);
    if (req.body.interview) {
      let dt = req.body.interview;
      dt.forEach((element) => {
        NotifScheduler(element.interviewer, element.dateTime);
      });
    }
  } catch (error) {
    res.send(error);
  }
});
router.get("/jobmanager", async (req, res) => {
  try {
    const interviewQueue = await jobManager.find({
      URL: req.query.url,
    });
    res.send(interviewQueue.reverse()[0]);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
