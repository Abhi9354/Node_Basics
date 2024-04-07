import chalk from 'chalk';
import figlet from 'figlet';
// console.log(chalk.red.bold.underline('Hello Brain Mentors'));
// console.log(chalk.bgYellow.blue.bold('Hello SkillRisers'));
figlet('Hi SkillRisers', (err, result)=>{
    if(err){
        console.log(chalk.red.bold('Some Problem Using Figlet '), err);
    }
    else{
        console.log(chalk.yellow.bold(result));
    }
})