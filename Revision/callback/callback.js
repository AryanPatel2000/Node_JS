const fs = require('fs');

fs.readFile('./callback.txt', (err, res) => {

    if(err)
    console.log(err);
    console.log('Content of callback.txt file: ', res.toString());
})

console.log('Program ended...');