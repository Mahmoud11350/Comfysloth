import Product from "../models/Product.js";
export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ numOfProducts: products.length, products });
};
export const getProduct = async (req, res) => {
  res.status(200).json("product");
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
    .status(200)
    .json({ numOfProducts: featuredProducts.length, featuredProducts });
};
