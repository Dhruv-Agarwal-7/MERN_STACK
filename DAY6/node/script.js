// const obj = require("./module1");
// console.log("Sum is ");
// obj.fn1(10, 20);
// x = obj.mul(3, 4);
// console.log("Multiplication is ", x);
// console.log("Name = ", obj.name);

const {mul, name} = require("./module1");
x = mul(3, 4);
console.log("Multiplication is ", x);
console.log("Name = ", name);