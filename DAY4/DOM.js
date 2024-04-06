window.console.log(window.innerHeight);
window.console.log(window.innerWidth);

console.log(window.document);
console.log(window);

const res = document.getElementsByTagName('h2');
console.log(res);

const res2 = document.getElementById('ht1');
console.log(res2);

const ne = document.createElement("h1");
ne.innerText = "Hyper";
const firstDiv = document.getElementsByTagName("div");
firstDiv[0].appendChild(ne);