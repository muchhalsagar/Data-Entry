import mongoose from "mongoose";

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


export default mongoose.model("TotalAssignment", totalAssignmentSchema)
