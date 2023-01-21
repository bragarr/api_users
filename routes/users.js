import express from "express";
import { getAllUsers, addUsers } from "../controller/userController/user.js";

export const routerUser = express.Router();

routerUser.get("/", getAllUsers);
routerUser.post("/", addUsers);