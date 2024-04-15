//Reading and Writing File Syncronously
// Usage of readfilesync https://nodejs.org/docs/latest/api/fs.html#fsreadfilesyncpath-options

console.log("Start");
const fs = require("fs");
const data = fs.readFileSync("./Readme.txt", "utf-8");
// console.log(data.toString());
console.log(data);
console.log("End");
fs.writeFileSync("./logs.txt", "10th April 2024: Day7"); //This will create a new file
