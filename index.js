// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
  fs.writeFileSync(path.join(__dirname, fileName), content, (err) => {
    err ? console.log(err) : console.log("successfully created Readme!"); //why doesn't this console log
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const content = JSON.stringify(data);
    const fileName = "ReadMeTEST.md";
    writeToFile(fileName, content);
  });
}

// Function call to initialize app
init();
