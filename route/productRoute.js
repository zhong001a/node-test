import express from "express";
const productRoute = express.Router();
//middlewere
import { Knex } from "../middlewere/Knex";

import productController from "../controller/productController";

productRoute.get("/",  Knex, productController.findAll);

productRoute.post("/insertcolor", Knex, productController.insertIntoColor);
productRoute.post("/insertcapacity", Knex, productController.insertIntoCapacity);

export default productRoute;
