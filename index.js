const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown")
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title for your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please give description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is this app used for?",
    name: "usage",
  },
  {
    type: "input",
    message: "What license was used for this README?",
    name: "license",
  },
  {
    type: "input",
    message: "Please add contributors",
    name: "contributor",
  },
  {
    type: "input",
    message: "What command do you use to test this App?",
    name: "test",
  }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
