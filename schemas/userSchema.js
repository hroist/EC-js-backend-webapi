const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    firstName: {type: String, required: [true, 'Please enter your first name']},
    lastName: {type: String, required: [true, 'Please enter your last name']},
    email: {type: String, required: [true, 'Please enter your email'], unique: true},
    password: {type: String, required: [true, 'Please enter your password']},   
})

module.exports = mongoose.model("users", userSchema)