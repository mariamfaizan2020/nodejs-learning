const fs = require('fs');
//important---node runs as a nonblocking i/o model..but we can block intentionally by using readfile sync
fs.readFile('file.txt','utf8',(err,data)=>{
    console.log("err",err)
    console.log("data",data)
})

console.log("fiinisnhed")

//result:fiinisnhed
//err null
//data "this is the file"


//readfileSync
const a=fs.readFileSync('file.txt')
console.log('file',a.toString())

console.log("finished")

//result:file "this is the file"
//finished