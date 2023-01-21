import { db } from "../../database/db.js";

export const getAllUsers = (_,res) => {
    const q = "SELECT * FROM users";
    
    db.query(q, (err, data) => {
        if(err) return res.json();
        return res.status(200).json(data)
    })
}

export const addUsers = (req, res) => {
    const q = "INSERT INTO users(`name`,`email`,`phone`,`date_of_birth`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.date_of_birth
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("User registered on database")
    })
}