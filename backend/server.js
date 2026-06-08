console.log("Server file is running...");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

// Notices route 👇 THIS IS IMPORTANT
app.get("/api/notices", (req, res) => {
  res.json([
    {
      title: "Exam Schedule",
      content: "Mid-sem exams start next week"
    }
  ]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


