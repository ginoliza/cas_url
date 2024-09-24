const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// API route to scrape data
app.get('/scrape', async (req, res) => {
  const url = req.query.url; // Get URL from query parameter

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    
    // Scrape content, e.g., page title
    const pageTitle = $('title').text();
    
    res.json({ title: pageTitle });
  } catch (error) {
    res.status(500).json({ error: 'Failed to scrape the page' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});