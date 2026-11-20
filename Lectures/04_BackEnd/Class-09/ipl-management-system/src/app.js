import "dotenv/config";
import express, { json } from "express";

import mongoose from "mongoose";
import ownerRoutes from "./modules/ipl-ms/routes/owner.routes.js";
const app = express();

app.get("/health", (req, res) => {
  res.send("Still Alive");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/owners", ownerRoutes);

async function start() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to MongoDB");

  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });
}

start().catch((error) => {
  console.error("Could not start the app:", error);
  process.exit(1);
});
