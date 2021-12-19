// Packages needed for this app
const inquirer = require("inquirer");
const fs = require("fs");

// generate html
const generateHTML = require("./generateHTML");

// roles
const Engineer = require('./lib/engineer');
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
// const { inherits } = require("util");
const myTeamArray = [];
// TODO: Create an array of questions for employee info

const managerQuestions = () => {
    return inquirer.prompt ([
        {
            type: "Input",
            name: "employeeName",
            message: "Please enter manager's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter manager's id."
        }, 
        {
            type: "input", 
            name: "email",
            message: "Please enter manager's email."
        },
        {
            type: "input",
            name: "number",
            message: "Please enter manager's office number."
        }
    ]) .then(answers => {
        const { employeeName, id, email, number} = answers;
        let newManager = new Manager (employeeName, id, email, number);

        myTeamArray.push(newManager)
        console.log(answers);
        addNewEmployees();
    })
}

const addNewEmployees = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "addEmployees",
            message: "Who would you like to add to your team?",
            choices: ["Engineer", "Intern", "No more members"]
        }
    ]) .then(function(data) {
        switch(data.addNewEmployees) {
            case "Engineer":
            engineerQuestions();
            break;

            case "Intern":
            internQuestions();
            break;

            case "No more members":
            initiateTeam();
            break;
        }
    })
}

const engineerQuestions = () => {
    inquirer.prompt ([
        {
        type: "input",
        name: "employeeName",
        message: "What is the employee's name?"
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
        }

    ]).then(answers => {
        const { employeeName, id, email, github } = answers;
        let engineer = new Engineer (employeeName, id, email, github)
        myTeamArray.push(engineer);
        addNewEmployees()
    })
}

const internQuestions = () => {
    inquirer.prompt ([
        {
        type: "input",
        name: "employeeName",
        message: "What is the employee's name?"
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
        name: "school",
        message: "What is Intern's school name?"
        }

    ]).then(answers => {
        const { employeeName, id, email, school } = answers;
        let intern = new Intern (employeeName, id, email, school)
        myTeamArray.push(intern);
        addNewEmployees()
    })
}

const writeFile = data => {
    fs.writeFile("./dist/index.html", generateHTML(data), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Profile created!")
        }
    })
}
managerQuestions();
// writeFile();

// function init() {
//     inquirer.prompt(addNewEmployees())
//     .then(function(answers) {
//         writeToFile("index.html", generateHTML(answers));
//     })
// }

// init();

// TODO: Create a function to write the HTML file
// const createPage = () => {
//     fs.writeFileSync("./dist/index.html", generateHTML(data), err => {
//         if (err) console.log(err)
//     })
// }

// createPage();
// TODO: Create function to create the file. 
// managerQuestions()
// .then(employeeQuestions)
// .then(myTeamArray => {
//     return generateHTML(myTeamArray)
// })
// .then(pageHTML => {
//     return fs.writeFile(pageHTML)
// })

// function createTeam() {
//     console.log("Team created!")

// }

// Function call to create page
// function init() {
//     inquirer.prompt(managerQuestions)
//     .then(addNewEmployees)
//     .then(function(data) {
//         writeToFile("./dist/index.html", generateHTML(data));
//     })
// }

// init();

