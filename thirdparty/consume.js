const figlet = require('figlet');
figlet('Brain Mentors',(err, result)=>{
    if(err){
        console.log('Problem Using Figlet ', err);
    }
    else{
        console.log(result);
    }
})