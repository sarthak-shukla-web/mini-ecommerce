import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// 🔹 Force dotenv to load .env from backend root
dotenv.config({ path: "./.env" });

// 🔹 Debug line (temporary)
console.log("MONGO_URI =", process.env.MONGO_URI);

// 🔹 Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
