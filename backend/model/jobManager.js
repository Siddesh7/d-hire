const mongoose = require("mongoose");

const jobManager = new mongoose.Schema({
  URL: {
    type: String,
  },
  interview: [{ dateTime: String, interviewer: String, uuid: String }],
});

module.exports = mongoose.model("jobManager", jobManager);
