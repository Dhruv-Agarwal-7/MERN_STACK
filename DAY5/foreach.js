let arr = [2, 10, 21, 32];

function printpretty (elem) {
    console.log(':', elem);
}

function printArray(arr) {
    for(let i=0; i<arr.length; i++)
        printpretty(arr[i]);
    
    arr.forEach(printpretty);

    arr.forEach(function (elem){
        console.log(':', elem);
    })

}

arr.forEach((elem) => {
    console.log(':', elem);
})

printArray(arr);