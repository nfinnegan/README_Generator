// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
//const utils = require("utils");
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
  {
    type: "input",
    name: "projName",
    message: "What is your projects name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "input",
    name: "challenges",
    message: "What challenges did you encounter?",
  },
  {
    type: "input",
    name: "futureDev",
    message: "Do you have directions for future development?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPLv3", "ISC", "None"],
  },
  {
    type: "input",
    name: "installDep",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "repoKnow",
    message: "What does the user need to know about using this repo?",
  },
  {
    type: "input",
    name: "contribute",
    message: "What does the user need to know about contributing to this repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
  fs.writeFileSync(path.join(__dirname, fileName), content, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      //console.log(data);
      const fileName = "/ReadMeTEST.md";
      writeToFile(fileName, generateMarkdown({ ...data }));
    })
    .then(() => console.log("successfully created Readme!"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
