// file handling
// fs module
// ES6 Module System (2015)
// Node JS 2009
const fs = require('fs') ; // Module System (Common JS) (import)
const path  = '/Users/amitsrivastava/Documents/node-examples/basics/second.js';
fs.readFile(path, (err, content)=>{
    if(err){
        console.log('Error During Second file read ', err);
    }
    else{
        console.log('******* Content of second file ', content.toString());
    }
})
fs.readFile(__filename, (error, buffer)=>{
    if(error){
        console.log('Error During File Read ', error);
    }
    else{
        console.log('##### File Content is ', buffer.toString());
    }
}); // __filename - current file path
// read file - Async Function (Appoint Thread (Async Thread, LibUV))
function add(x,y){
    return x + y;
}
const result = add(10,20);
console.log('Result is ', result);