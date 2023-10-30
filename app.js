var http = require('http');
var fs = require('fs');

http
    .createServer(function(req, res){
        // Sending large chunks of data- It's difficult for users
        // const text = fs.readFileSync('./content/big.txt', 'utf8');
        // res.end(text);
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
        fileStream.on('open', ()=>{
            //pipe() is a method pushing from ReadStream to WriteStream
            //You can write & read data in chunks
            //pipe is a write stream
            fileStream.pipe(res); 
        });
        fileStream.on('error', (error)=>{
            res.end(error);
        });
    })
    .listen(5000);

    //By this way, in response header, Transfer-Encoding : chunked
    //So instead of sending our file back in one large instance, we're sending it back in chunks
    