const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "badge",
        message: "What badges would you like to include?"
    },
    {
        type: "input",
        name: "description",
        message: "Please add a description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide steps on how to install your application:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage:"
    },
    {
        type: "list",
        name: "licence",
        message: "Whatt license would you like to include?",
        choices: ['Apache 2.0', 'MIT', 'GNU GPLv3', 'None']
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties:"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests:"
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

inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("Success!!!");
          });
        });

});

function init() {

}

init();