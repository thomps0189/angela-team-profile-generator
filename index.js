// Packages needed for this app
const inquirer = require("inquirer");
const fs = require("fs");

// generate html
const generateHTML = require("./generateHTML");
// TODO: Create an array of questions for employee info
const questions = [
    {
        type: "input",
        name: "employeeName",
        message: "What is the employee's name?"
    },
    {
        type: "checkbox",
        name: "role",
        message: "What is the employee's role?",
        choices: [
            {name: "Manager"},
            {name: "Engineer"},
            {name: "Intern"}
        ]
    }, 
    {
        type: "input",
        name: "id",
        message: "What is the employee's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is Engineer's GitHub username?"
    },
    {
        type: "input",
        name: "school",
        message: "What is Intern's school name?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is Manager's office number?"
    }

]



// TODO: Create a function to write the HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        } else {
            console.log("Your Team Profile has been created!")
        }
    })
};
// TODO: Create function to create the file. 


// Function call to create page
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("./dist/index.html", generateHTML(data));
    })
}

init();