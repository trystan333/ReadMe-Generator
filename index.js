// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// var licenseBadges = [
//     '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
//     '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
//     '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
//     '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
//     '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
// ];



// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project\'s title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your project\'s description?',
            name: 'desc',
        },
        {
            type: 'input',
            message: 'What are the installation instructions for your project?',
            name: 'install',
        },
        {
            type: 'list',
            choices: ['MIT', 'Mozilla Public License', 'Apache 2.0', 'Boost Software License', 'Eclipse Public License', 'None of the above'],
            message: 'What license is your project using?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is the usage of your project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who/what should be in the contributions?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])
    
    .then((response) => fs.writeFile('README.md', `

    

# **${response.title}**

### ${response.desc}
    
## **Table of Contents:**
    
[Installation](#installation)
    
[Usage](#usage)
    
[Contributors](#contributors)
    
[Licenses](#licenses)
    
[Questions](#questions)
    
---
    
## Installation
    
${response.install}
    
## Usage
    
${response.usage}
    
## Contributors
    
${response.contribute}
    
## Licenses

${JSON.stringify(response.license)}
    
## Questions
    
### [You can reach me on GitHub](https://github.com/${response.github}) or [through email](mailto:${response.email})
    `, (response) => console.log('completed')
    ));
;


// QUESTIONS NEEDED: project title, description, table of contents, installation, usage, license, contributing, tests, and questions,
// license and license badge, github profile added to questions, email address added to questions, table of contents
























// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
