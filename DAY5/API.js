console.log('start');
// const req = fetch ("https://api.github.com/users/Dhruv-Agarwal-7");
// console.log(req);
// console.log("End");

const req = fetch('https://dummyjson.com/products/1');
const res = req.then(res => res.json());
res.then((data) => console.log(data));
console.log('End');

// .then(res => console.log(res))
// .then(res => res.json())
// .then(json => console.log(json))

fetch('https://dummyjson.com/products/1')
 .then(res => res.json())
 .then((data) => console.log(data))
 .catch((err) => {
    console.log("Error");
 });


