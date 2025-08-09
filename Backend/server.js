import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// Initialize express app
const app = express();
await connectDB();

// Middlewares
app.use(cors()); // Important: Call cors() as a function
app.use(express.json()); // Optional: to parse JSON bodies

// Routes
app.get("/", (req, res) => res.send("API Working"));
app.post('/cleck' , express.json(), clerkWebhooks)

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
