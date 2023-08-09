
const licensesArray = [
    {
      name: 'Apache',
      link: '[link](https://www.apache.org/licenses/LICENSE-2.0)',
      shield: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    },
    {
      name: 'MIT',
      link: '[link](https://opensource.org/licenses/MIT)',
      shield: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
      name: 'Boost',
      link: '[link](https://www.boost.org/LICENSE_1_0.txt)',
      shield: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'
    },
    {
      name: 'Mozilla',
      link: '[link](https://opensource.org/licenses/MPL-2.0)',
      shield: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
    },

]

function renderLicenseLink(license) {
  
  if(license.licenses == ''){
    let licenseShield = '';
    let licenseLink = '';
    let licenseName = '';
    return {licenseShield, licenseLink,  licenseName};

  } else {
    let liName = licensesArray.find(({name}) => name == license.licenses);
    let licenseShield = liName.shield;
    let licenseLink = liName.link;
    let licenseName = liName.name;
    return {licenseShield, licenseLink,  licenseName};
}
}


function generateMarkdown(data) {
  let liName = renderLicenseLink(data);
  let licenseShield = liName.licenseShield;
  let licenseLink = liName.licenseLink;
  let licenseName = liName.licenseName;
  return `
# ${data.title}                     ${licenseShield}

## Description

${data.description}

## Table of Contents

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contribute](#contribute)
[Tests](#tests)
[Questions](#questions)

## Installation

${data.instructions}

## Usage

${data.usage}

## License

${licenseName}
${licenseLink}

## Contribute

${data.guidelines}

## Tests

${data.test}

## Questions

GitHub: ${data.username}
Email ${data.email} for questions.

`;
}

module.exports = generateMarkdown;