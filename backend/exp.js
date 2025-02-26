const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    studentClass: Number,
    age: Number
})

module.exports = mongoose.model('data', dataSchema);