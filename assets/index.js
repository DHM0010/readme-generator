// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input//
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "write a brief description of your projext.",
  },
  {
    type: "input",
    name: "installation",
    message: "what are your installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "enter the usage information.",
  },
  {
    type: "input",
    name: "contributioms",
    message: "enter contribution guidelines.",
  },
  {
    type: "input",
    name: "tests",
    message: "enter test instructions.",
  },
  {
    type: "list",
    name: "license",
    message: "choose a license for your project.",
    choices: ["MIT", "Apache", "The Unlicense", "EPL"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Function to writr the readme content
function generateReadmeContent(data) {
  let licenseBadgeUrl = `https://img.shields.io/badge/License-${encodeURIComponent(
    data.license
  )}-blue.svg`;
  return `
# ${data.title} 


## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License

![License](${licenseBadgeUrl})


This project is licensed under the ${data.license} License.

## Contributing
${data.contributions}

## Tests
${data.tests}

## Questions
For additional questions, contact [${data.github}](https://github.com/${data.github}) or reach out via email at ${data.email}.
`;
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} has been successfully created!`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadmeContent(answers);
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
