// validacion de formato de mail 
const validator = require('validator');
const chalk = require('chalk');
console.log(validator.isEmail('pablof@tecnoshare.com'));

console.log(chalk.blue.bgGreen("Hola mundo en color!!"));
console.log(chalk.redBright.bgGreen("Hola mundo en color!!"));
