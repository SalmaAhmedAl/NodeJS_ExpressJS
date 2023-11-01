const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.method);

    //take url from header
    console.log(req.url);
    if(req.url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write('<h1> Hello, world! </h1>');
        res.end();
    }else{
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write("<h1 style=\" text-align: center;\"> Page isn't found!</h1> <h1 style=\"color: darkgrey; font-size: 150px; text-align: center;\"> 404 </h1> ");
        res.end(); 
    }
    
});

server.listen(5000);