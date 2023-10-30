const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',{highWaterMark: 90000});

// default 64kb
// last buffer -> remainder
// highWaterMark -> control size
// const stream = createReadStream('./content/big.txt', {highWaterMark:90000, encoding:'utf8'});
// const stream = createReadStream('./content/big.txt', {encoding:'utf8'});


stream.on('data', (chunk)=>{
    console.log(`Received ${chunk.length} bytes of data.`);
     console.log(chunk);
});

stream.on('error', (err)=>{
    console.log(err);
});  