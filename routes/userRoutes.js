import Router from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { getcurrentUser } from "../controllers/userControllers.js";

const router = Router();

router.get("/current-user", authMiddleware, getcurrentUser);

export default router;
