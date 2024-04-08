console.log("Yo");
function fetchAPI() {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi%2CIN?unitGroup=us&key=LHDSC3BZ7BM582CRZ3VJWFCDQ";
  fetch(url)
    .then((res) => res.json())
    .then(console.log);
}
fetchAPI();

function renderUI(data) {
  const row = document.createElement("tr");
  const cell1 = document.createElement("th");
  cell1.innerText = "Date";
  row.appendChild(cell1);
}
