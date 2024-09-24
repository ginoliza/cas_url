// express 
const express = require('express')
// const path = require('path');
// const url = require('url');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// scrapper 
const axios = require("axios");
const cheerio = require("cheerio");
const inputValue = '';