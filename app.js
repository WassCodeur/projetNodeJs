const express = require('express')

const app = express()
const QuotesAuthors = require('./routes/authors')
const Quotes = require('./routes/quotes')
const Router = require('./routes/quotesauthors')
const UserRouter = require('./routes/user')

app.use(express.json()); //pour pouvoir utiliser le body parser pour les requêtes POST




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/authors', QuotesAuthors);
app.use('/api/quotes', Quotes);
app.use('/api/', Router);
app.use('/api/auth', UserRouter);
module.exports = app;