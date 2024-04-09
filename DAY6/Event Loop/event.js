setTimeout(() => {
  console.log("Timeout 1");
}, 10000);
console.log("Start");
setTimeout(() => {
  console.log("Timeout 2");
}, 5000);
console.log("intermediate");
console.log("End");
