const mongoose = require('mongoose');

const new_assignmentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    pinCode: {
        type: Number,
    },
    jobFunctional: {
        type: String,
    },
    phone: {
        type: String, // Change this to String
    },
    annualRevenue: {
        type: Number, // Change this to Number
    },
    cleanCode: {
        type: String,
    },
    reference_assignment: {
        type: String,
    },
    userId: {
        type: String,
    },
});

module.exports = mongoose.model('new_Assignment', new_assignmentSchema);