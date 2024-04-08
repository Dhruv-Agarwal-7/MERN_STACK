function callAPI() {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=14fd34af35fe4493b10114972dcc064b"
  ).then((res) => {
    res.json().then((data) => {
      renderUI(data);
    });
  });
}
callAPI();

const root = document.getElementById("root");
function renderUI(data) {
    console.log("Articles Data");
  const articles = data.articles;
  console.log(articles);
  for (let i = 0; i < articles.length; i++) {
    const ar = articles[i];
    const div = document.createElement("div");
    div.setAttribute("class", "news-card");
    const h3 = document.createElement("h3");
    h3.innerText = ar.title;
    const img = document.createElement("img");
    img.src = ar.urlToImage;
    const p = document.createElement("p");
    p.innerText = ar.description;
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);
    root.appendChild(div);
  }
}
