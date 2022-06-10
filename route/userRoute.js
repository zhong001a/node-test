import express from "express";
const userRoute = express.Router();
//middlewere
import { Knex } from "../middlewere/Knex";
import { Auth } from "../middlewere/Auth";

import userController from "../controller/userController";

userRoute.get("/", [Auth, Knex], userController.finAll);

userRoute.get("/:id", Knex, userController.findById);

userRoute.post("/", Knex, userController.create);

export default userRoute;
