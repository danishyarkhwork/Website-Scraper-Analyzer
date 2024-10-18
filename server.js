const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
app.use(express.json());

// Helper function to analyze SEO elements from HTML
function analyzeSEO(html) {
  const $ = cheerio.load(html);

  // SEO Elements
  const title = $("title").text().trim() || null;
  const metaDescription = $('meta[name="description"]').attr("content") || null;
  const h1Tags = $("h1").length || 0;
  const totalImages = $("img").length;
  const imagesWithAlt = $("img[alt]").length || 0;
  const canonical = $('link[rel="canonical"]').attr("href") || null;

  // Simple SEO Scoring System
  let score = 100;
  if (!title) score -= 10;
  if (!metaDescription) score -= 15;
  if (h1Tags === 0) score -= 10;
  if (imagesWithAlt < totalImages) score -= 5;
  if (!canonical) score -= 5;

  return {
    title,
    metaDescription,
    h1Tags,
    totalImages,
    imagesWithAlt,
    canonical,
    score,
  };
}

// Endpoint to analyze the SEO of a given URL
app.post("/analyze-seo", async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url);
    const seoData = analyzeSEO(response.data);
    res.json(seoData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch or analyze the URL" });
  }
});

// Serve the HTML interface
app.use(express.static("public")); // Assume the HTML file is in 'public' directory

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
