const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    address: String
})

module.exports = new mongoose.model('student', studentSchema, 'students')