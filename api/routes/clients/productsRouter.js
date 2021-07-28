import express from "express";
import {
	getProducts,
	getProductDetails,
} from "../../controllers/clients/productsController.js";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProductDetails);

export default productsRouter;
