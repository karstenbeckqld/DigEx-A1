const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    accessLevel: Int32Array,
    email: String,
    password: String
});

const User = mongoose.model('User', Schema);

module.exports = User;