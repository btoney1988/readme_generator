// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://github.com/${data.userName}/${data.title})

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
 - This app is used for ${data.usage}.

# License
 - The project is liscensed under ${data.license}.

# Contributing
 - Contributers: ${data.contributing}

# Tests
 - Run the ${data.tests} command for testing.

# Questions
 - If you have any questions about ${data.title} feel free to contact me at ${data.email} or create an issue at https://www.github.com/${data.userName}/${data.title}
`
};

module.exports = generateMarkdown;
