// Packages needed for this app
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// generate html
const generateHTML = require("./generateHTML");
// const generateHTML = (data) => {
//     if("choice".value === "Manager") {
//         return `
//             <div>Manager info here. </div>
            
//             `
//     }

//     return `
//     <!DOCTYPE html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
//                 <title>My Team</title>
//             </head>
//             <body>
//                 <header class="bg-danger text-center fs-1 text-white mb-5">My Team</header>
//                 <div class="card mx-auto" style="width: 18rem;">
//                             <div>test</div>
//                 </div>
//             </body>
//             </html>
//     `
// }

// roles
const Engineer = require('./lib/engineer');
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

let myTeamArray = [];
// TODO: Create an array of questions for employee info
const addNewEmployees = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "choice",
            message: "Who would you like to add to your team?",
            choices: ["Manager", "Engineer", "Intern", "No more members"]
        }
    ]) .then(({choice}) => {
        switch(choice) {
            case "Manager":
            managerQuestions();
            return; 

            case "Engineer":
            engineerQuestions();
            return;
            

            case "Intern":
            internQuestions();
            return;

            case "No more members":
            writeFile();
            return;
        }
    })
}

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

const writeFile = () => {
    fs.writeFile(`${path.join(process.cwd())}/dist/index.html`, generateHTML(myTeamArray), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("profile created!")
        }
    })
}



const init = () => {
    addNewEmployees()
};
init ()
