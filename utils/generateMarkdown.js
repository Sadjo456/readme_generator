// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![github license](https://img.shields.io/badge/license-${license}-green.svg)
    `;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)
    `;
  }
  return "";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License`;
  }
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  
  
  ## Table of Contents (Optional)
  
  -[Project Name](#projectName)
  -[Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [User Name](#GitHub)
  - [E-mail](#E-mail)
  - ${renderLicenseLink(data.license)}
  
  ## Project Name

  ${data.projectName}

  ## Description

  ${data.description}
  
  ## Installation

  ${data.instalation}
  
  
  ## Usage

  ${data.usage}

  ## User Name

  ${data.github}

  ## Contact

  ${data.contact}

  
  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}


  
  ${renderLicenseSection(data.license)}
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ${renderLicenseBadge(data.license)}
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
`;
}

module.exports = generateMarkdown;
