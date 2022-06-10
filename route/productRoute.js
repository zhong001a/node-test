import express from "express";
const productRoute = express.Router();
//middlewere
import { Knex } from "../middlewere/Knex";

productRoute.get("/", Knex, async (req, res) => {
  return res.json({
    status: "success",
    message: "Product",
  });
});

export default productRoute;
