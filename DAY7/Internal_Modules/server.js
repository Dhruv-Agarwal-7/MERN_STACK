const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data); //JSON.parse is SYnc not async;
// console.log(dataObj);
const products = dataObj.products;

// const htmlTemplate = `
// <!DOCTYPE HTML>
// <html>
//   <head>
//     <style>
//       .product-card {
//         max-width: 500px;
//         margin:20px auto;
//         border:3px double aqua;
//         border-radius: 8px;
//         padding: 16px;
//       }
//     </style>
//   <head>
//   <body>
//     PRODUCT
//   </body>
//   </html>
// `;

const htmlTemplate = fs.readFileSync('./page.html', 'utf-8');
const cardTemplate = fs.readFileSync('./card.html', 'utf-8');

// const cardTemplate = `
// <div class = 'product-card'>
//   <h4>_TITLE_</h4>
//   <p>_INFO_</p>
// </div>
// `;

// const card1 = cardTemplate
//   .replace("_TITLE_", products[0].title)
//   .replace("_INFO_", products[0].description);

// const card2 = cardTemplate
//   .replace("_TITLE_", products[1].title)
//   .replace("_INFO_", products[1].description);

const allcards = products.map((elem) => {
  let newCard = cardTemplate;
  newCard = newCard
    .replace("_TITLE_", elem.title)
    .replace("_INFO_", elem.description);
  return newCard;
});

const page = htmlTemplate.replace("PRODUCT", allcards);

const app = http.createServer((req, res) => {
  console.log("Recieved");
  console.log(req.url); //URL is printed in the console
  res.writeHead(200, {
    "content-type": "text/html",
  });
  res.end(page);
});

app.listen(1400, () => {
  console.log("......Server Started......");
});
