const fs = require('fs');
const inq = require('inquirer');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "list",
        name: "license",
        message: "Please provide the project license or your badge link"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
];

// function to write README file
const writeToFile = (fileName, data) 

// function to initialize program
function init() {

}

// function call to initialize program
init();
