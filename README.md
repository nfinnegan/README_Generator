# README_Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project

For this application, I worked on dynamically generating a ReadMe file for streamlined workflows.

## Description 📁

Based off of our introduction to Node.js & npm packages in last week's sprint, that skill/knowledge was put to the test in building this application. This application runs through the terminal. Simply follow the installation instructions, and then type `node index.js` in your terminal to get started. Based off your inputs, a ReadMe file will be generated for you to use.

## User Story 👩

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria ✅

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation 💾

To install the necessary dependencies, please run the following (individually) in your terminal:

        npm init -y
        npm install inquirer

## Technologies Used 💻

- Node.js
- JavaScript
- npm packages

## Preview

https://youtu.be/rou59dBzWAk

## Resources 💡

- https://stackoverflow.com/questions/42179037/writing-json-object-to-a-json-file-with-fs-writefilesync
- https://www.youtube.com/watch?v=fBNz5xF-Kx4&list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&index=3

## License

This project is covered under the MIT license.
