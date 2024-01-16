// src/index.ts
import express from "express";
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });


require("./database/index"); 
const PORT = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  res.json({
    message: "server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
