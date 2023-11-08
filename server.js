import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import { connect } from "mongoose";
import express from "express";
const app = express();

// routes
import productRoutes from "./routes/productRoutes.js";

// middlewares
import errorHandler from "./middlewares/errorHandler.js";

app.use("/api/v1/products", productRoutes);

// post middlewares
app.use(errorHandler);

const PORT = 5001;
const start = async () => {
  try {
    await connect(process.env.MONGO_DEV);
    app.listen(PORT, console.log(`server is runing on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
