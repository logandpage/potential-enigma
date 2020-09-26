// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# **${data.title}**

${data.badge}

##Description
  ${data.description}

##Table of Contents
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contributors](#Contributors)
  -[Test](#Test)
  -[Repository Link](#Repository)
  -[GitHub Info](#GitHub)

##Installation
  ${data.installation}

##Usage
  ${data.usage}
  
##License
  ${data.license}

##Badge
  ${data.badge}  
  
##Contributors
  ${data.contributors}  

##Test
  ${data.test}
  
##Repository
  -[Project Repo](${data.repo})
  
##GitHub
  -[GitHub Profile](${githubInfo.profile})
  -<${githubInfo.email}>

`;
}

module.exports = generateMarkdown;