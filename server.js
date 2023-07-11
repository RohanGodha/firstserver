const http= require("http");
//package name and importing of it and it can handle request of https too

const port = 8081;
//localport number

http
.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write("<h1>Hi! Rohan</h1>");
    response.end();    
})
.listen(port,()=>{
    console.log(`Node started at ${port}`);
}); 
