// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const generatorMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "Please give a name for the title.",
    name: "Title"
}, {
    type: "input",
    message: "Please give a detailed description as to what the project is about.",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What does the user need to install to run the application",
    name: "Installation"
}, {
    type: "input",
    message: "How do you use the application?",
    name: "Usage"
}, {
    type: "input",
    message: "Provide contribution guidelines",
    name: "Contribution"
  },
  {
    type: "input",
    message: "Provide test instructions.",
    name: "Tests"
  },
  {
    type: 'List',
    message: "Choose a license for your application:",
    choices: ["MIT", "GNU GPLv3", "Apache 2.0", "BSD 3-Clause"],
    name: "License"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: 'Github'
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email"
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
