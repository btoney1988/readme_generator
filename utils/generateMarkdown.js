// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.userName}/${data.title})

# Description
 - ${data.description}

# Table of contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

# Installation
 - The dependencies to be installed are: ${data.installation}

# Usage
 - This app is used for ${data.usage}

# License
 - The project is liscensed under ${data.license}

# Contributing
 - Contributers: ${data.contributing}

# Tests
 - Run the ${data.tests} command for testing.

# Questions
 - "https://www.github.com/${data.userName}"
 - "Feel free to email me at ${data.email}"
`
};

module.exports = generateMarkdown;
