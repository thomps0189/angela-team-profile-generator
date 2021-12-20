// create cards for all roles
// Icons for roles - manager: clipboard, engineer: document, intern: headphones, 

const Manager = require("./lib/manager")

const employeeInfo = (data) => {
  let html = data.map (employee => {
    if(employee.getRole() === "Manager") {
      return `
        <div class="card-header bg-primary text-white fs-4">
        ${employee.employeeName}
        </div>
        <div class="bg-primary text-white fs-5 ">
        <span class="oi oi-clipboard m-2"></span>
        Manager
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${employee.id}</li>
        <li class="list-group-item">Email: <a href = "mailto:${employee.email}">${employee.email}</a></li>
        <li class="list-group-item">Number: ${employee.officeNumber}</li>
        </ul>
        </div>
      `
    } else if (employee.getRole() === "Engineer") {
      return `
          <div class="card-header bg-primary text-white fs-4">
          ${employee.employeeName}
        </div>
        <div class="bg-primary text-white fs-5 "><span class="oi oi-document m-2"></span>Engineer</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id: ${employee.id}</li>
          <li class="list-group-item">Email: <a href = "mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">GitHub (if applicable): <a href = "www.github.com/${employee.github}>${employee.github}</a></li>
        </ul>
        </div>
      `
    } else if (employee.getRole() === "Intern") {
      return `
      <div class="card-header bg-primary text-white fs-4">
      ${employee.employeeName}
      </div>
      <div class="bg-primary text-white fs-5 ">
      <span class="oi oi-headphones m-2"></span>
      Intern
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${employee.id}</li>
      <li class="list-group-item">Email: <a href = "mailto:${employee.email}">${employee.email}</a></li>
      <li class="list-group-item">School: ${employee.school}</li>
      </ul>
      </div>
      `

    }
  })
  console.log(data);

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
      <title>My Team</title>
  </head>
  <body>
      <header class="bg-danger text-center fs-1 text-white mb-5">My Team</header>
      <div class="card mx-auto" style="width: 18rem;">
       <div>${html.join("")}</div>
      </div>
  </body>
  </html>
  `
}



module.exports = employeeInfo;
