const mongoose = require('mongoose');

const agreementSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    },
    signature: {
        type: String,
    },
    photo: {
        type: String,
    },
    startdate :{
        type:String,
    }
});

module.exports = mongoose.model('agreement', agreementSchema);