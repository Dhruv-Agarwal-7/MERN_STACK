const arr = [10, 20, 30];
//Map Function
const ans = arr.map((a) => {
  console.log(a);
  return a * 2;
});
console.log(ans);

//Library Functions with map

const ans2 = arr.map((a) => Math.pow(a, 2));
console.log(ans2);

const arr2 = [10.23, 23.23, 35.29];
const ans3 = arr2.map((a) => Math.ceil(a));
console.log(ans3);

//Filter Function

const ans4 = arr.filter((a) => {
  if (a > 20) return true;
  else return false;
});
console.log(ans4);


//Filter on String

const arr3 = ["Delhi", "Mumbai", "Chennai", "Kolkata", "India", "Iraq"];
const ans5 = arr3.filter((a) => {
  if (a.includes("i") || a.includes("I")) return a;
});
console.log(ans5);

//Filter with Strings having multiple characters

const arr4 = [
  "Delhi, India",
  "Mumbai, India",
  "Chennai, India",
  "Washington, USA",
  "Paris, France",
  "Texas, USA",
];
const ans6 = arr4.filter((a) => {
  const small = a.toLowerCase();
  if (small.includes("india")) return true;
  else return false;
});
console.log(ans6);

//Short Hand

const ans7 = arr4.filter((a)=>a.toLowerCase().includes('india'));
console.log(ans7);

//Reduce Function

const arr5 = [10,22,34,50];
const ans8 = arr5.reduce((a,b,c,d) => {
    console.log(a,b,c,d);
    return a+b;
})
console.log(ans8);