import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "please provide the product name"],
    minlength: [4, "product name can't be less than 4"],
    maxlength: [20, "product name can't be more than 20"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "please provide the product price"],
  },
  image: {
    type: String,
    required: [true, "please provide the product image"],
  },
  colors: {
    type: Array,
    required: [true, "please provide the product avalible colors"],
  },
  company: {
    type: String,
    enum: {
      values: ["marcos", "liddy", "ikea", "caressa"],
      message: "please provide valid company",
    },
  },
  description: {
    type: String,
    required: [true, "please provide the product description"],
  },
  category: {
    type: String,
    enum: {
      values: ["office", "kitchen", "bedroom", "dining", "kids", "living room"],
      message: "please provide valid category",
    },
  },
  shipping: {
    type: Boolean,
    default: false,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default model("Product", productSchema);
