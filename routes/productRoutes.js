import { Router } from "express";
import {
  deleteProduct,
  getAllProducts,
  getFeaturedProducts,
  getProduct,
  updateProduct,
} from "../controllers/productControllers.js";

const productRoutes = Router();

productRoutes.route("/").get(getAllProducts);
productRoutes.route("/featured").get(getFeaturedProducts);
productRoutes
  .route("/:id")
  .get(getProduct)
  .delete(deleteProduct)
  .patch(updateProduct);

export default productRoutes;
