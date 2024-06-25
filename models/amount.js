const mongoose = require('mongoose');

const amountSchema = new mongoose.Schema({
    amount: { type: String },
    date: { type: String },
});

module.exports = mongoose.model('Amount', amountSchema);