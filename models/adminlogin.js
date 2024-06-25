const mongoose = require('mongoose');

const adminloginSchema = new mongoose.Schema({
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
    role: {
        type: String,
        default: 'Admin',
    },
});

module.exports = mongoose.model('AdminLogin', adminloginSchema);