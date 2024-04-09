//Inversion of Control
//Why Promises

// function createOrder(x, fn) {
//   console.log(x);
//   setTimeout(() => {
//     fn("abc123");
//   }, 1000);
// }
// function makePayment(orderID) {
//   console.log(orderID);
// }

// createOrder("soap", makePayment);

// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done");
//   }, 5000);
// });

// pr.then((res)=>{
//     console.log(res);
// })

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Some Items are out of stock");
    }, 0);
});

setTimeout(() => {
  console.log("First timeout...");
}, 0);
console.log(pr);

pr.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
