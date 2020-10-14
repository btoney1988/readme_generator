//  Dependencies
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown")
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
    message: "List dependencies to be installed:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter what the app is used for:",
    name: "usage",
  },
  {
    type: "list",
    message: "Enter licenses used for this project:",
    name: "license",
    choices: [
      "MIT",
      "BSD",
      "GPL",
      "Other (Please note you will have to enter correct license in created readme.)"
    ]
  },
  {
    type: "input",
    message: "List contributors:",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter command used for testing:",
    name: "tests",
  },
  {
    type: "input",
    message: "Enter GitHub username:",
    name: "userName",
  },
  {
    type: "input",
    message: "Enter email address:",
    name: "email",
  }
];

// function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function (err) {
    // If error occurs when writing the file it will show in the console log
    if (err) {
      return console.log(err);
    }
    // If successful console log will return the file name
    console.log("Wrote file:" + fileName);
  });
};

// function to initialize program
function init() {
  // Inquierer prompt to run through questions array
  inquirer.prompt(questions)
    .then(function (data) {
      // Write function to create the README.md file from the generate markdown function
      writeToFile("testREADME.md", generatorMarkdown(data));
    });
};

// function call to initialize program
init();