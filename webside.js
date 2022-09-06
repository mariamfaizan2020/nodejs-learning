const  fs  = require('fs');
const http =require('http');

const port=process.env.PORT || 3000;

const server =http.createServer((req,res)=>{
   
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    console.log(req.url)

    if(req.url =='/'){
        res.statusCode=200;
       const data=fs.readFileSync('index.html')
       res.end(data.toString())
    }
    else if(req.url =='/cwh'){
        res.statusCode=200;
        res.end('<h1>this is httpserver</h1><p>learning how to built http server</p>')
    }
    else if(req.url =='/about'){
        res.statusCode=200;
        res.end('<h1>this is aboutScreen</h1><p>learn how to create website</p>')
    } 
    else{
        res.statusCode=404
        res.end('<h1>NOT FOUND</h1><p>page request not found</p>')
    }

})

server.listen(port,()=>{
    console.log(`Server us listening on port ${port}`)
})