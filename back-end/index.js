const express = require("express");
const cors = require("cors");
const database = require("./config/database");
const app = express();
const PORT = 5001; // Using .env variable if it exists, else defaults to 5000
database.connect();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
// Test route

app.get("/", (req, res) => {
  res.send("Backend is working 2381!");
});
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
