import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import chartRoutes from "./routes/chart.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/data", chartRoutes);

app.listen(PORT, () => {
  console.log(`Server running at Port: ${PORT}`);
  connectDB();
});
