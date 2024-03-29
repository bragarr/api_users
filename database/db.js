import dotenv from "dotenv";
import { createPool } from "mysql";

dotenv.config();

export const db = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10
}) 