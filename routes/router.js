const express = require("express");
const { JobPostHandalar, singleJob } = require("../controller/jobController");

const router = express.Router();

router.get("/jobs/:_id", singleJob)
router.get("/jobs", JobPostHandalar)
router.post("/job-post", JobPostHandalar)

module.exports = router;
