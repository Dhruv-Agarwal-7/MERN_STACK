console.log(message);
var message = "Hello WOrld";
var age = 19;
console.log(message);
console.log(age);
for (var i = 0; i < 5; i++) console.log("Helllo");
function myfun() {
  alert("Halo");
}
function fun2() {
  console.log("yooo");
}
fun2();

let x = 5;
console.log(x);
x = "gooo";
console.log(x);

const msg = "OA";
console.log(msg);

let a = ["a", "b", "c", "d"];
let cpy = [...a];
console.log(cpy);

const str = "Dhruv";
const usrName = `My Name is: ${str}`;
console.log(usrName);

var p = '1';
var q = '2';
sum(p,q);
function sum (p, q) {
    if (p && q)
        console.log("True");
    else
        console.log ("False");
}


fun3 (1);
function fun3 (a, b) {
    if (a == b)
        console.log("SUp");
    else if (a > 0)
        console.log("hola");
    else 
        console.log("YOoo");    
}


let anon = function () {  //Anonymous Function it can't be called before function declaration
    console.log ("toom");
}
anon();

let arrow = () => {
    console.log ("noom");
}
arrow();

const obj = {              //It acts like a key-value where values can be accessed with the help of key
    1 : 'one',
    2 : 'two',
    3 : 'three'
};

obj['name'] = 'Dhruv';

console.log(obj);
console.log(`${obj[1]} ${obj[2]}`);
const str2 = prompt("ENter kar ");
console.log(`${obj[str2]}`);