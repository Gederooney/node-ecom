import express from "express";
import productsRouter from "./routes/clients/productsRouter.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
	res.send("Server is up");
});
app.use("/api/products", productsRouter);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
