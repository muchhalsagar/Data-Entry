const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    accesscode: {
        type: String,
    },
    mobile: {
        type: String,
    },
    address: {
        type: String,
    },
    salary: {
        type: String,
    },
    designation: {
        type: String,
    },
});

module.exports = mongoose.model('Employee', employeeSchema);