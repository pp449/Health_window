import dotenv from "dotenv";
import "./src/db";
import app from "./src/app";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✔ Server running: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
