const dbConnexion = require('../config/dbConnect')
exports.getAllQuotesAuthors = (req, res) => {
    const quotes =  "SELECT titres, content, first_name, last_name FROM quotes_table INNER JOIN authors ON quotes_table.author_id = authors.id";
    dbConnexion.query(quotes, (err, results) => {
        if(err){
            return res.status(500).json({message: "Error fetching.", error: err});
        }
        else if(results.length == 0){
            return res.status(400).json({message: "quotes not found"});
        }
        return res.json(results)
    })
}