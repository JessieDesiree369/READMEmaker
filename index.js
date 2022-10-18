// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
    default: '',
  },
  {
    type: 'input',
    name: 'descrip',
    message: 'Please give a description for this project.',
    default: '',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What steps must be taken to install your project?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'use',
    message: 'Please provide instructions for use.',
    default: '',
  },
  {
    type: 'input',
    name: 'credit',
    message: 'Please give the names and github profiles of all who are credited with this project.',
    default: '',
  },
  {
    type: 'input',
    name: 'license',
    message: 'License?',
    default: '',
  },
  {
    type: 'input',
    name: 'contrib',
    message: 'How can others contribute?',
    default: '',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please give examples on how to run tests.',
    default: 'npm test',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((readmeInfo) => {
    writeToFile('README.md', generateMarkdown({ ...readmeInfo }));
  });

}

// Function call to initialize app
init();





