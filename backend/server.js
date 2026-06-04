// Backend entry point using Express.js
const express = require('express');
const app = express();
app.use(express.json());
// Simple test route
app.get('/', (req, res) => {
 res.send("Backend running successfully!");
});
// Start server
app.listen(5000, () => {
 console.log("Server started on port 5000");
});
