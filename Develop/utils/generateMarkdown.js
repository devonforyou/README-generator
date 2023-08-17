// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'ISC':
      return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://opensource.org/licenses/MIT)';
    case 'ISC':
      return '![License: ISC](https://opensource.org/licenses/ISC)';
    case 'Apache 2.0':
      return '![License](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '![License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    ${license}. Link to license document ${renderLicenseLink(license)}` 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

  ## Table of Contents:
  - Description
  - Installation
  - Usage
  - Contributions
  - Tests
  - License


  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributions:
  ${data.contributions}

  ## Tests:
  ${data.tests}


  ${renderLicenseSection(data.license)}

  ## Questions:
  Any questions reach out to ${data.email} or ${data.github} on github.
  
`;
}

module.exports = generateMarkdown;
