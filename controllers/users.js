const dbConnexion = require('../config/dbConnect')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const sql = "SELECT * FROM users WHERE email = ?";
    dbConnexion.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching.", error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "User not found." });
        }
        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).json({ message: "Invalid password." });
        }
        return res.status(200).json({
            UserId : user.id,
            token : jwt.sign(
                { UserId: user.id },
                "RANDOM_TOKEN_SECRET",
                { expiresIn: "24h" }
            )
        });
    });
    
}

exports.signup = (req, res) => {
    const password = bcrypt.hashSync(req.body.password, 10);
    const email = req.body.email;
    const username = req.body.username;
    // verify if user already exists
    const sql = "SELECT * FROM users WHERE email = ?";
    dbConnexion.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching.", error: err });
        }
        if (results.length > 0) {
            return res.status(409).json({ message: "User already exists." });
        }
        else {
            const sql = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)";
            dbConnexion.query(sql, [email, username, password], (err, results) => {
                if (err) {
                    return res.status(500).json({ message: "Error fetching.", error: err });
                }
                return res.status(201).json({ message: "User created." });
            });
        }
    });
  
}