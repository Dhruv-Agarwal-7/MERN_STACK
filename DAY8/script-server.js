const fs = require("fs");
const url = require("node:url");
const http = require("http");

const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;
// console.log(dataObj)

const homeTemplate = fs.readFileSync("./home.html", "utf-8");

const productTemplate = fs.readFileSync("./product.html", "utf-8");

const inputElement = `
<form action='/product'>
<input type="text" name = "productName">
<button type = "submit">Search</button>
</form>
`;

let home = [];
for (let i = 0; i < dataObj.length; i++) {
  let temp = homeTemplate;
  temp = temp.replace("$TITLE$", dataObj[i].title);
  temp = temp.replace("$img_src$", dataObj[i].images[0]);
  temp = temp.replace("$products_link$", `/product?id=${i}`);
  home.push(temp);
}
home = home.join(" ");

// console.log(home);
const Server = http.createServer((req, res) => {
  //   const path = url.parse(req.url);
  //   const pathname = path.pathname;
  res.writeHead(200, {
    "content-type": "text/html",
  });
  const { pathname, query } = url.parse(req.url, true);
  console.log(query);
  if (pathname == "/home") {
    res.end(inputElement + home);
  } else if (pathname == "/product") {
    const id = query.id;
    const pName = query.productName;
    if (id) {
      const item = dataObj[id];
      let prodCard = productTemplate;
      prodCard = prodCard
        .replace("PRODUCT_TITLE", item.title)
        .replace("PRODUCT_IMAGE", item.thumbnail)
        .replace("PROD_DES", item.description)
        .replace("_PRICE_", item.price);
      res.end(prodCard);
    } else if (pName) {
      const result = dataObj.filter((elem) => {
        if (elem.title.includes(pName)) return true;
        else return false;
      });
      res.end(JSON.stringify(result));
    }
  } else res.end("404... N0T F0und");
});
Server.listen(1400);
