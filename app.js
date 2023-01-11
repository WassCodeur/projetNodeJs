const express = require('express')
const mysql = require('mysql')


const app = express()
app.use(express.json()); //pour pouvoir utiliser le body parser pour les requêtes POST
let dbConnexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quotes'
})
dbConnexion.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// app.get("/", (req, res, next) => {
//     let stuff = [
//         {
//             _id: 'oeihfzeoi',
//             title: 'Mon premier objet',
//             description: 'Les infos de mon premier objet',
//             imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             price: 4900,
//             userId: 'qsomihvqios',
//         },
//         {
//             _id: 'oeihfzeomoihi',
//             title: 'Mon deuxième objet',
//             description: 'Les infos de mon deuxième objet',
//             imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             price: 2900,
//             userId: 'qsomihvqios',
//         },
//     ];
//     res.status(200).json(stuff);
//     next();
// });
app.get("/api/authors", (req, res) => {
    //faire une requête à la base de données pour récupérer la liste des sauces
    const authors = "SELECT * FROM authors";	//requête SQL

    dbConnexion.query(authors, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching.", error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "No Authors found yet." });
        }
        return res.json(results);
    });

});
app.get("/api/quotes", (req, res) => {
    const quotes = "SELECT * FROM quotes_table";
    dbConnexion.query(quotes, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching.", error: err });
        }
        else if (results.length == 0) {
            return res.status(400).json({ message: "quotes not found" });
        }
        return res.json(results)
    })
})

module.exports = app;