import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // loads .env.local if present

import { connectToDatabase } from "../database/mongoose";

(async () => {
  try {
    await connectToDatabase();
    console.log("✅ MongoDB connection successful");
    process.exit(0);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
})();
