const mongoose = require("mongoose");

const jobRequest = new mongoose.Schema({
  candidateAddress: {
    type: String,
  },
  Company: {
    type: String,
  },
  Role: {
    type: String,
  },
  manager: {
    type: String,
  },
});

module.exports = mongoose.model("jobRequest", jobRequest);
