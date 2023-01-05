import { db } from "../../database/db.js";

export const getAllUsers = (_,res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err) return res.json();
        return res.status(200).json(data)
    })
}

export function sum(a, b) {
    return a + b;
};