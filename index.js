import express from "express";
import cors from "cors";

import { routerUser } from "./routes/users.js";

export const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 8000;

app.use("/users", routerUser);

app.listen(port, () => {
    console.log("Servidor Ativo!");
})