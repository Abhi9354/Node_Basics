import fs from 'fs';
function getCurrentFilePath(){
    const url = new URL(import.meta.url);
// console.log('PATH is ', url.pathname);
return url.pathname;
}
//const path = '/Users/amitsrivastava/Documents/node-examples/moduledemo/test.txt';
// console.log('Meta ', import.meta.url);

fs.readFile(getCurrentFilePath(), (err, content )=>{
    if(err){
        console.log('Unable to read file content ', err);
    }
    else{
        console.log('Content is ', content.toString());
    }
})
var a= 10;
var b = 20;
var c = a + b;
console.log('Sum is ', c);