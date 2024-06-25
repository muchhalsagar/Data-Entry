import mongoose from "mongoose";

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
        type: Number,
    },
    annualRevenue: {
        type: String,
    },
    cleanCode: {
        type: String,
    }
})

export default mongoose.model("SubmittedAssingment", submittedAssingmentSchema)