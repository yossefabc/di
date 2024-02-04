const chalk = require ('./node_modules/chalk');
function displayColor() {
    console.log(chalk.blue.bold('This is a colorful message!'));
  }

  module.exports = displayColor;