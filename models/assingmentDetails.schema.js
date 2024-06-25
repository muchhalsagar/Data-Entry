const mongoose = require("mongoose");

const submittedAssingmentSchema = new mongoose.Schema({
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
        type: String,
    },
    annualRevenue: {
        type: Number,
    },
    cleanCode: {
        type: String,
    }
})

module.exports = mongoose.model("AssingmentDetails", submittedAssingmentSchema)