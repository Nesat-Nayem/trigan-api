
const JobPost = require('../model/jobModel');


const JobPostHandalar = async (req, res) => {
  try {
    if (req.method === "POST") {
      const jobInfo = new JobPost(req.body);
      const result = await jobInfo.save();
      res.status(200).json({
        success: true,
        message: "add success",
      });
    } else if (req.method === "GET") {
      const category = req.query.category || "";
      const query = category ? { category } : {};
      const jobInfo = await JobPost.find(query);
      res.status(200).json(jobInfo);
    } else {
      res.status(405).json({

        success: false,
        message: "Method Not Allowed",
        data: {}

      });
    }
  } catch (error) {
    res.status(500).json({

      success: false,
      message: error.message,
      data: {}

    });
  }
};

const singleJob = async (req, res) => {
  try {
    const job = await JobPost.findById(req.params._id);
    if (!job) {
      res.status(404).json({ message: "Job not found" });
      return;
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: {}
    });
  }
}


module.exports = { JobPostHandalar, singleJob }

