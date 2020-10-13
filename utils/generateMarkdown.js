// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.userName}/${data.title})

# Description
 - ${data.discritption}

# Table of contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

# Installation
 - ${data.installation}

# Usage
 - ${data.usage}

# License
 - ${data.license}

# Contributing
 - ${data.contributing}

# Tests
 - ${data.tests}

# Questions
 - "https://www.github.com/${github}"
 - "Feel frere to email me at ${email}"
`
};

module.exports = generateMarkdown;
