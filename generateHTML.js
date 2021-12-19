// create cards for all roles
// Icons for roles - manager: clipboard, engineer: document, intern: headphones, 
// card for engineer
const generateEngineer = function (engineer) {
  return `
  <div class="card-header bg-primary text-white fs-4">
  ${data.employeeName}
</div>
<div class="bg-primary text-white fs-5 "><span class="oi oi-document m-2"></span>Engineer</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Id: ${data.id}</li>
  <li class="list-group-item">Email: ${data.email}</li>
  <li class="list-group-item">GitHub (if applicable): ${data.github}</li>
</ul>
</div>
  `
}
// card for Manager
const generateManager = function (manager) {
  return `
  <div class="card-header bg-primary text-white fs-4">
  ${data.employeeName}
  </div>
  <div class="bg-primary text-white fs-5 ">
  <span class="oi oi-clipboard m-2"></span>
  Manager
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Id: ${data.id}</li>
  <li class="list-group-item">Email: ${data.email}</li>
  <li class="list-group-item">Number: ${data.officeNumber}</li>
  </ul>
  </div>
  `
}
// card for intern
const generateIntern = function (intern) {
  return `
  <div class="card-header bg-primary text-white fs-4">
  ${data.employeeName}
  </div>
  <div class="bg-primary text-white fs-5 ">
  <span class="oi oi-headphones m-2"></span>
  Intern
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Id: ${data.id}</li>
  <li class="list-group-item">Email: ${data.email}</li>
  <li class="list-group-item">School: ${data.school}</li>
  </ul>
  </div>
  `
}
// entire page with roles that will be added
function generateHTML(data) {
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
        <div class="card-header bg-primary text-white fs-4">
          ${data.employeeName}
        </div>
        <div class="bg-primary text-white fs-5">${data.role}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">Number: ${data.officeNumber}</li>
          <li class="list-group-item">GitHub (if applicable): ${data.github}</li>
          <li class="list-group-item">School (if applicable): ${data.school}</li>
        </ul>
      </div>
</body>
</html>
    `
    
}

module.exports = generateHTML;
