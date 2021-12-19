// Packages needed for this app
const inquirer = require("inquirer");
const fs = require("fs");

// generate html
const generateHTML = require("./generateHTML");

// roles
const Engineer = require('./lib/engineer');
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
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
    ]) .then(managerQuestions => {
        const { employeeName, id, email, number} = managerQuestions;
        const manager = new Manager(employeeName, id, email, number);

        myTeamArray.push(manager)
        console.log(manager);
    })
}
const employeeQuestions = () => {
    console.log("Now let's add employees")
    return inquirer.prompt ([
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
        type: "checkbox",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern"]
    },  
    {
        type: "input",
        name: "github",
        message: "What is Engineer's GitHub username?",
        when: ({role}) => {
            if (role === "Engineer")
            return
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is Intern's school name?",
        when: (input) => input.role === "Intern"
    },
    {
        type: "confirm",
        name: "confirmEmployees",
        message: "Would you like to add more employees?",
        defaullt: false
    },
    ]).then(employeeQuestions => {
        const { employeeName, id, email, role, github, school } = employeeQuestions;
        var employee;

        if (role === "Intern") {
            employee = new Intern (employeeName, id, email, school);
        } else if (role === "Engineer") {
            employee = new Engineer (employeeName, id, email, github);
        }

        myTeamArray.push(employee);

        if (confirmEmployees) {
            return employeeQuestions(myTeamArray);
        } else {
            return myTeamArray
        }

    })

}




// TODO: Create a function to write the HTML file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if (err) {
//             return console.log(err)
//         } else {
//             console.log("Your Team Profile has been created!")
//         }
//     })
// };
// TODO: Create function to create the file. 
managerQuestions()
.then(employeeQuestions)
.then(myTeamArray => {
    return generateHTML(myTeamArray)
})
.then(pageHTML => {
    return fs.writeFile(pageHTML)
})

// Function call to create page
// function init() {
//     inquirer.prompt(managerQuestions)
//     .then(employeeQuestions)
//     .then(function(data) {
//         writeToFile("./dist/index.html", generateHTML(data));
//     })
// }

// init();