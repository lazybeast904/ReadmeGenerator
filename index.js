const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'Please key in your desired name.',
  default: '',
},
{
  type: 'input',
  name: 'licenses',
  message: 'Credits to all contributors'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
