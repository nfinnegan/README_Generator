// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projName}

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
  If you'd like to check out more of my work you can find me at [${data.github}]

  ## License
  This project is covered under the ${data.license} license.
`;
  console.log(generateMarkdown(data));
}

module.exports = generateMarkdown;

//console.log(`${content.projName}`);
//console.log(`${content.challenges}`);
