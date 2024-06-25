const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    mobile: { type: String },
    address: { type: String },
    plan: { type: String },
    caller: { type: String },
    startDate: { type: Date, DateOnly: true }, // DateOnly option
    endDate: { type: Date, DateOnly: true }, // DateOnly option
    status: {
        type: String,
        enum: ["Registered", "Pending", "Success", "Active", "InActive", "Cancel", "Freeze"],
        default: "Pending",
        required: true,
    },
    amount: [{
        type: Number,
    }],
    remark: {
        type: String,
    },
    password: {
        type: String,
    },
    passwordResetOTP: {
        type: String,
    },
    totalAssingement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TotalAssignment",
    },
    submittedAssingments: {
        submittedAssingmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AssingmentDetails",
        },
    },
    assignmentDetailIds: {
        type: [mongoose.Schema.ObjectId],
        ref: "AssingmentDetails",
        default: null,
    },
    role: {
        type: String,
        default: 'User',
    },
    totalAssingment: {
        type: Number,
        default: 520
    },
    submitdAssingment: {
        type: Number,
        default: 0
    },
    pendingAssingment: {
        type: Number,
        default: 520
    },
    correctAssignment: {
        type: Number,
    },
    incorrectAssignment: {
        type: Number,
    }
},  { timestamps: true });

module.exports = mongoose.model('User', userSchema);