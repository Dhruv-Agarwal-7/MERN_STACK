//Reading file Asyncronously

console.log("Start");
const fsPromises = require("node:fs/promises");
const pr = fsPromises.readFile("./Readme.txt", "utf-8");
pr.then((res) => {
  console.log(res);
});
console.log("End");

