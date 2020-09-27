// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
    return `
# ${data.title}
  
${data.badge}
  
## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 

## Description 
    ${data.description}  
  
## Installation
    ${data.installation}
  
## Usage
    ${data.usage}

## License
    ${data.license}
  
## Contributors
    ${data.contributing}
  
## Test
    ${data.test}
  
## Repository
  - [Project Repo](${data.repo})
  
## GitHub
    - [GitHub Profile](${githubInfo.profile})
    `;
}
  
module.exports = generateMarkdown;