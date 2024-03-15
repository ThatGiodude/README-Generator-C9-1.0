// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-$(license)-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `\n* [license](#license)\n`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "none") {
    return "";
  } return `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Contributing](#Contributing)
  -[Tests](#Tests)
  -[License Information](#License)
  -[Questions](#Questions)

  ## Installation
  ${data.installation}

  ##Usage
  ${data.Usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.Contribution}

  ## Tests
  ${data.Tests}

  ## Questions
  For additional questions, you can reach me through:

  Github:[${data.github}](https://github.com/${data.github})

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
