// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      response =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "APACHE 2.0":
      response =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPLv3":
      response =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "ISC":
      response =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "None":
      response = "";
      break;
  }
  return response;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(`${data.license}`);
  return `# ${data.projName}

  ${response}

  ## Description
  
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Challenges](#challenges)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation
  To install the necessary dependencies, please run the following in your terminal:

    
        ${data.installDep}
 

  ## Usage

  ${data.repoKnow}

  ## Challenges Encountered

  ${data.challenges}

  ## Contributing
  To contribute to this repo, please ${data.contribute}

  ## Tests

      ${data.tests}

  ## Questions
  If you have any questions about this project or repo please feel free to reach out at ${data.email}.
  If you'd like to check out more of my work you can find me at [${data.github}](https://github.com/nfinnegan) 

  ## License
  This project is covered under the ${data.license} license.
`;
  console.log(generateMarkdown(data));
}

module.exports = generateMarkdown;
