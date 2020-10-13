// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
 - ${discritption}

## Table of contents
 - ${tableOfContents}

## Installation
 - ${installation}

## Usage
 - ${usage}

## License
 - ${license}

## Contributing
 - ${contributing}

## Tests
 - ${tests}

## Questions
 - "https://www.github.com/${github}"
 - "Feel frere to email me at ${email}"
`
};

module.exports = generateMarkdown;
