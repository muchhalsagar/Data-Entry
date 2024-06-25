const mongoose = require('mongoose');

const userloginSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    passwordResetOTP: {
        type: String,
    },
    role:{
        type: String,
        enum: ["admin", "user"], // Corrected enum definition
        default: "user",
        required: true,
    },
    isStamp: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('UserLogin', userloginSchema);