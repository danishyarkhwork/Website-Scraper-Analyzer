const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Serve static files (frontend) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Analyze SEO route (API)
app.post("/analyze-seo", async (req, res) => {
  const { url } = req.body;
  try {
    // Add your SEO analysis logic here...
    res.json({ message: "SEO analysis complete" });
  } catch (error) {
    res.status(500).json({ error: "Failed to analyze URL" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
