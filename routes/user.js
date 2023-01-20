const express = require('express')
const auth = require('../midleware/auth')
const routeruser = express.Router();
const UserCtrl = require('../controllers/users')


routeruser.post("/signup",auth,UserCtrl.signup);
routeruser.post("/login",auth,UserCtrl.login);

module.exports = routeruser;