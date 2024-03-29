import express from "express";
import productRoutes from "./routes/product.routes.js";
import morgan from "morgan";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("common"));

app.use("/api", productRoutes);

app.listen(PORT);
console.log("Server on PORT", PORT)