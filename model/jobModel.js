const mongoose = require('mongoose');


var jobPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    office_location: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    short_description: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    },
    experience_level: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    position_type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    expiry_date_time: {
        type: String,
        required: true,
    },
    admin_assigned_to: {
        type: String,
        required: true,
    },
    requirements_and_responsibilities: {
        type: Array,
        required: true,
    },



}, { timestamps: true });

const JobPost = mongoose.model("JobPost", jobPostSchema);
module.exports = JobPost;
