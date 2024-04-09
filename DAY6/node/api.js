console.log("start");
async function getApi() {
  const pr = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=14fd34af35fe4493b10114972dcc064b"
  );
  console.log("making json");
  const data = await pr.json();
  console.log("data fetched");
}
getApi();
console.log("end");
