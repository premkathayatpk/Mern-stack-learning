import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.post("/createProduct", createProduct);
productRoutes.get("/getProduct", getProduct);
productRoutes.put("/updateProduct/:id", updateProduct);
productRoutes.delete("/deleteProduct/:id", deleteProduct);

export default productRoutes;
