const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [{
      type: 'input',
      message: 'What is your ReadMe title?',
      name: 'title'
},
{
    type: 'input',
    message: 'What is the description of your ReadMe?',
    name: 'description'
},
{
    type: 'input',
    message: 'What is the installation command?',
    name: 'installation'
},
{
    type: 'input',
    message: 'Enter usage information',
    name: 'usage'
},
{
    type: 'input',
    message: 'Enter contributing guidelines',
    name: 'contribution'
},
{
    type: 'input',
    message: 'What is the test command?',
    name: 'testing'
},
{
    type: 'list',
    message: 'Choose a license for your project',
    name: 'license',
    choices: ['MIT', 'Apache', 'GPL v3.0', 'Eclipse']
}

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(generateMarkdown)
        .then(console.log);
}

// function call to initialize program
init();
