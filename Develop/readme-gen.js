const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the project's title?:",
      name: "title",
    },
    {
      type: "input",
      message: "Describe your project: ",
      name: "description",
    },
    {
      type: "input",
      message: "Describe the installation process: ",
      name: "installation",
    },
    {
      type: "input",
      message:
        'Who contributed to this project? (Seperate multiple names with "-"):',
      name: "contributors",
    },
    {
      type: "input",
      message: "What tests are available if any?:",
      name: "tests",
    },
    {
      type: "list",
      message: "Which license will be used?:",
      name: "license",
      choices: ["BSD", "MIT", "MPL"],
    },
    {
      type: "input",
      message: "What is your E-mail address?:",
      name: "email",
    },
    {
      type: "input",
      message: "What is your github user account?:",
      name: "github",
    },
  ])
  .then((response) => {
    let readMeTemplate = `
<h1 align="center">${response.title}</h1>
![badge](https://img.shields.io/badge/license-${response.license}-blue)<br />
## Description
${response.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions?](#questions)
## Installation
 ${response.installation}
## License
![badge](https://img.shields.io/badge/license-${response.license}-blue)
<br />
This application is protected under the ${response.license} license.
## Contributors
${response.contributors}
## Tests
${response.tests}
## Questions
<br />
:octocat: GitHub: [${response.github}](https://github.com/${response.github})<br />
<br />
✉Email: ${response.email}
    `;
    fs.writeFile("README.md", readMeTemplate, "", (e) => console.log(e));
  });
