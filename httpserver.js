const http =require('http');

const port=process.env.PORT || 3000;

const server =http.createServer((req,res)=>{
    console.log(req)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>this is httpserver</h1><p>learning how to built http server</p>')
})

server.listen(port,()=>{
    console.log(`Server us listening on port ${port}`)
})