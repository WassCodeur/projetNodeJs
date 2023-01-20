const dbConnexion = require('../config/dbConnect')
exports.getAllAuthors = (req, res) => {
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
}