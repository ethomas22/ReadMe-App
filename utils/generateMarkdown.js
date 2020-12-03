// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  # Table of Contents
  1. [Description](#Description)
  1. [Installation](#installtion)
  1. [Usage](#Usage)
  1. [Contributing Guidelines](#Contributing-Guidelines)
  1. [Test Command](#Test-Command)
  1. [License](#License)

  # Description
   ${data.description}
   # Installation
   ${data.installation}
   # Usage
   ${data.usage}
   # Contributing Guidelines
   ${data.contribution}
   # Test Command
   ${data.testing}
   # License 
   ${data.license}
   

  
`;
}

module.exports = generateMarkdown;
