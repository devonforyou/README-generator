// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this project?',
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What installation steps did you take?',
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?',
    }, 
    {
        type: 'input',
        name: 'contributions',
        message: 'What contributions did you utilize?',
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'How would someone test your project?',
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What license did you choose',
        choices: ['MIT', 'ISC', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'Include your github username:',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Include your email:',
    }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md created.');
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
