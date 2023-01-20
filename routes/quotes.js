const express = require('express')
const auth = require('../midleware/auth')
const routerquotes = express.Router();
const quotesCtrl = require('../controllers/quotes')



routerquotes.get("/",auth ,quotesCtrl.getAllQuotes )


module.exports = routerquotes;