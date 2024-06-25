const mongoose = require('mongoose');

const totalAssignmentSchema = new mongoose.Schema({
    totalAssingment: {
        type: Number,
        default: 500
    },
    submittedAssingment: {
        type: Number,
        default: 0
    },
    pendingAssingment: {
        type: Number,
        default: 500
    }
})


module.exports = mongoose.model("TotalAssignment", totalAssignmentSchema)