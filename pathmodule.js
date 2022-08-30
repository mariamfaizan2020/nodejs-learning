const path = require('path');


const a1=path.basename('C:\\temp\\myfile.html');
const a2=path.dirname('/temp/myfile.html');
const a3=path.extname(__filename)
const a4=process.env.PATH.split(path.delimiter)


const a5=path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  });
  const a6=path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored'
  });
  const a7=path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
  });
  const a8=path.parse('/temp/myfile.html')
console.log("a1",a1)
console.log("a2",a2)
console.log("a3",a3)
console.log("a4",a4)
console.log("a5",a5)
console.log("a6",a6)
console.log("a7",a7)
console.log("a8",a8)