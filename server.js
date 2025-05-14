import { app } from "./app.js";
import { config } from "dotenv";
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";

config({
  path: "./config/.env",
});
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
connectDatabase();

const ListenPort = process.env.PORT || 4000;

app.listen( ListenPort , () => {
  console.log("Server is running on port " + ListenPort);
});
