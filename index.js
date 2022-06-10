import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import formidableExpress from "express-formidable";

//route
import userRoute from "./route/userRoute";
import productRoute from "./route/productRoute";

dotenv.config();
app.use(cors());
app.use(formidableExpress());

const PORT = process.env.APP_PORT || 3000;
//default route
app.get("/", async (req, res) => {
  res.send("katexoxo");
});

//api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);

app.listen(PORT, () => console.log(`Start ... http://localhost:${PORT}`));
