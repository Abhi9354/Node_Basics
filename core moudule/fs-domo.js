import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
//asynchronous
//i need the 
//import.meta.url gives the file path
// fs.readFile()

function getCurrentDir()
{

console.log('import.meta.url',import.meta.url);//file name dega

const __pathname = fileURLToPath(import.meta.url);//isko file path dega
console.log('path',__pathname);
const __dirname= path.dirname(__pathname);//directory name
console.log('dirname',__dirname);

    return __dirname;
}

const dir= getCurrentDir();
console.log(dir);
const fullPath= path.join(dir,'sample/hello.txt');
console.log("full path",fullPath);
fs.readFile(fullPath,'utf8',function(err,data)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("content",data);
    }
})