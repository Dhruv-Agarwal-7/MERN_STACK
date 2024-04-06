const obj = {
    "first.name" : "Dhruv",
    "last.name" : "Agarwal"
};
obj['first.name'] = "D";
console.log(obj);

const arr = [1,2,3];
arr [10] = 20;
console.log(arr);
arr.push(8);                    //Element will be added at the last
console.log(arr);
arr.pop();                      //Last Element will be deleted
console.log(arr);


console.log(typeof(obj));
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

const aria = [1,2,30];
function fun() {
if (Array.isArray(aria))
        console.log("array");
else if (Array.isObject(aria))
        console.log("Object");
else
        console.log("Not Object");
} 
fun();



const arr1 =["name", "gonda", 45, false];
for (let i of arr1)
    console.log(i);

// const obj1 = {0:"zero", 1:"One", 2:"Two"};               //Object is not iterable
// for (let i of obj1)
//     console.log(i);