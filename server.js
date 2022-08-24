const http = require("http");

const port = 8081;

http
    .createServer((require, response) => { 
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write("<h1>Hello, This is Rohan Godha's Server</h1>");
        response.end();
    })
    .listen(port, () => {
        console.log(`Nodejs server started on port number ${port}`);
    });