//CallBack in FileSystem
const fs = require('fs');
fs.readFile('./Readme.tx', 'utf-8', (err, data) => {
    if(err)
        console.log(`${err}`);
    else
        console.log(data);
});

