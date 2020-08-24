const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./generateMarkdown")

// array of questions for user
const questions = [

  {
    // Title
    type: "input",
    message: "What is the title of your application?",
    name: "title",
  },

  {
    // Description
    type: "input",
    message: "Give a brief and to the point descripton of your application",
    name: "description",

  },
  {
    // Installation
    type: "input",
    message: "How does the user install your application? Be clear and consice with your instructions",
    name: "installation",
  },
  {
    // Usage
    type: "input",
    message: "How does the user use your application to its fullest extent?",
    name: "",
  },
  {
    // License
    type: "input",
    message: "What kind of licensing does your application have?",
    name: "license",

  },
  {
    // Contributing
    type: "input",
    message: "If you would like users to contribute to your application, then give clear and consice instructions on how to do so.",
    name: "license",

  },
  {
    // Tests
    type: "input",
    message: "How do your users test your applicaton?",
    name: "license",

  },
  {
    // Github
    type: "input",
    message: "What is your Git Hub Username?",
    name: "githubUsername",

  },
  {
    // Email
    type: "input",
    message: "For alternative methods of contact, enter your email address",
    name: "email",

  },
];

// function to write README file
function writeToFile(fileName, data) {
  // fs.writeFile()
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, 2));

    //  Passes answers
    const md = generateMarkdown(answers);
    console.log(md)
    //  pass result
    //  writeToFile("README.md", md):
  });

}

// function call to initialize program
init();
