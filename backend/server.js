const express = require("express");

const app = express();
const PORT = 3000;

// API
app.get("/api/health", (req, res) => {
  res.json({
    status: "UP",
    service: "backend",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
