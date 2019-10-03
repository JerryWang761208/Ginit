const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const { 
  files,
  inquirer,
 } = require('./lib');

/** clear terminal */
clear();

/** Show Our Logo */
console.log(
  chalk.yellow(
    figlet.textSync('Ginit', { horizontalLayout: 'full' })
  )
);

/********************* Files **************************/
/** check .git exists */
if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repository!'));
  process.exit();
}


/********************* Inquirer **************************/
const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
}

run();