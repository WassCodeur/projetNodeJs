const express = require('express')

const routerauthors = express.Router();
const auth = require('../midleware/auth')
const AuthorsCtrl = require('../controllers/authors')

routerauthors.get("/",auth, AuthorsCtrl.getAllAuthors);



module.exports = routerauthors;