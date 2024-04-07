// call 
const obj = require('./calc');
//console.log('Args ', process.argv);
for(let i = 2; i<process.argv.length; i++){
    console.log('Args are ', process.argv[i]);
}
console.log('Add ', obj.add(10,20));
console.log('Sub ', obj.sub(10,20));