const dbConnexion = require('../config/dbConnect')
exports.getAllQuotes = (req, res) => {
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
}