const mysql = require('mysql')
const Connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quotes'
})
Connexion.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log("Connection established");
});

module.exports = Connexion;