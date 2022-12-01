const mysql = require('mysql');
const express = require('express');

const thingSchema = mysql.Schema({
    AuthorFirstName: { type: String, required: true },
    AuthorLastName: { type: String, required: true },
    CitationType: { type: String, required: true },
    CitationDescription: { type: text, required: true },
    create_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Thing', thingSchema);