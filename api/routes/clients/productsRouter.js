import express from "express";
import { getProducts } from "../../controllers/clients/productsController.js";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);

export default productsRouter;
