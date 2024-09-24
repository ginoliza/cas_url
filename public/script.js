// scrapper 
document.getElementById('myForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const url = document.getElementById('inputField').value;

  try {
    const response = await fetch(`/scrape?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    
    if (data.title) {
      alert(`Page Title: ${data.title}`);
    } else {
      alert('Failed to scrape the page.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred.');
  }
});

// const inputValue = '';

// document.getElementById('myForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the form from submitting the traditional way
//   inputValue = document.getElementById('inputField').value;
//   console.log(inputValue); // Print the input field's value to the console
// });

// async function processURL(url) {
//   try {
//     const { data } = await axios.get(url);
//     const $ = cheerio.load(data);
//     const h1Text = $("h1").text();
//     const lines = h1Text.split("\n");

//     Modify line1: remove " Convocatoria "
//     const line1 = lines[0].replace(" Convocatoria ", "");

//     Modify line2: remove "                        CAS N° " (with exact spaces)
//     const line2 = lines[1].replace("                        CAS N° ", "");
    
//     Select the element containing "Remuneración"
//     const remunerationText = $('p:contains("Remuneración")').text();
//     Use a regular expression to extract the amount
//     let amount = remunerationText.replace(/[^0-9.,]/g, '');
//     if (amount.charAt(0) == '.') {                
//         amount = amount.substring(1);
//     }

//     Output the modified lines
//     console.log(line1);
//     console.log(line2);
//     console.log(amount);
    
//   } catch (error) {
//     console.error("Error fetching the URL:", error);
//   }
// }

// processURL(
//   "https://www.convocatoriasdetrabajo.com/oportunidad-laboral-cas-007-tecnico-administrativo-universidad-jose-maria-arguedas-apurimac-425734.html"
// );
