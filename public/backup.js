// scrapper 
const url = '';
const axios = require('axios');
const cheerio = require('cheerio');
const readline = require('node:readline');

let inputURL = '';

async function processURL(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const h1Text = $("h1").text();
    const lines = h1Text.split("\n");

    // Modify line1: remove " Convocatoria "
    const line1 = lines[0].replace(" Convocatoria ", "");

    // Modify line2: remove "                        CAS N° " (with exact spaces)
    const line2 = lines[1].replace("                        CAS N° ", "");
    
    // Select the element containing "Remuneración"
    const remunerationText = $('p:contains("Remuneración")').text();
    // Use a regular expression to extract the amount
    let amount = remunerationText.replace(/[^0-9.,]/g, '');
    if (amount.charAt(0) == '.') {                
        amount = amount.substring(1);
    }

    // Output the modified lines
    console.log(line2);
    console.log(url);    
    console.log(line1);    
    console.log(amount);
    
  } catch (error) {
    console.error("Error fetching the URL:", error);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`URL: `, name => {
  inputURL = name;  
  console.log("\n");  
  processURL(inputURL);
  rl.close();
});