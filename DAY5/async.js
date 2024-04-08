// console.log('GEC Start');
function printpretty () {
    console.log("PrettyStart");
    let ans = 2+3;
    console.log(ans);
    console.log("PrettyEnd");
}

// setTimeout (printpretty, 10000);    //Time is in milliseconds
// console.log("GEC End");

const btn = document.getElementById('btn');
btn.addEventListener("click", printpretty);