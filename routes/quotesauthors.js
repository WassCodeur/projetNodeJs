const express = require('express')
const auth = require('../midleware/auth')
const router = express.Router();
const quotesauthors = require('../controllers/quotesauthors')

router.get("/",auth , quotesauthors.getAllQuotesAuthors )

module.exports = router;