const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown")
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Enter the title of this project.",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of this project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please list dependencies to be installed:",
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
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Wrote file:" + fileName);
  });
};

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      writeToFile("testREADME.md", generatorMarkdown(data));
    });
};

// function call to initialize program
init();