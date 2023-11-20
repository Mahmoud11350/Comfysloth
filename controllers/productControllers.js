import { StatusCodes } from "http-status-codes";
import Product from "../models/Product.js";
import CUSTOMERROR from "../errors/CUSTOMERROR.js";

export const getAllProducts = async (req, res) => {
  let { search, category, company, color } = req.query;
  let queryObject = {};

  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
    ];
  }
  if (category && category !== "all") {
    queryObject.category = category;
  }
  if (company && company !== "all") {
    queryObject.company = company;
  }
  if (color && color !== "all") {
    queryObject.colors = color;
  }
  const products = await Product.find(queryObject);
  res.status(StatusCodes.OK).json({ numOfProducts: products.length, products });
};
export const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ _id: id });
  if (!product) {
    throw new CUSTOMERROR(`no product with id ${id}`, StatusCodes.BAD_REQUEST);
  }
  res.status(StatusCodes.OK).json({ product });
};
export const deleteProduct = async (req, res) => {
  res.status(200).json(" delete product");
};

export const updateProduct = async (req, res) => {
  res.status(200).json(" update product");
};

export const getFeaturedProducts = async (req, res) => {
  const featuredProducts = await Product.find({ featured: true });
  res
    .status(StatusCodes.OK)
    .json({ numOfProducts: featuredProducts.length, featuredProducts });
};
