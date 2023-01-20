const mysql = require('mysql');
const express = require('express');


const usersSchema = mysql.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
});


module.exports = mysql.model('User', usersSchema);