import express from "express";
import { getAllUsers } from "../controller/userController/user.js";

export const routerUser = express.Router();

routerUser.get("/", getAllUsers);