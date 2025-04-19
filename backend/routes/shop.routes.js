import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    getAllProductsbyCategory,
    sellProduct,
    addproduct
} from "../controller/shop.controller.js";
// import protectedRoutes from "../middleware/protectedRoutes.js";

const router = Router();

// Get all products
router.get("/products", getAllProducts);

// Get product by ID
router.get("/products/:id", getProductById);

// Get all products in a category
router.get("/products/category/:category", getAllProductsbyCategory);

// Customer adds a product to their collection
router.post("/products/add/:id", addproduct);

// Seller posts a product for sale
router.post("/products/sell", sellProduct);

export default router;
