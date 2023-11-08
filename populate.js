import * as dotenv from "dotenv";
dotenv.config();
import { connect } from "mongoose";
import Product from "./models/Product.js";
import products from "./utils/mockData.js";

const start = async () => {
  try {
    await connect(process.env.MONGO_DEV);
    await Product.deleteMany();
    await Product.create(products);
  } catch (error) {
    console.log(error);
  }
};
start();
