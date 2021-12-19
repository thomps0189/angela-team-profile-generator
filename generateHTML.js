
function generateHTML(data) {
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
    <header class="bg-danger text-center fs-1 text-white mb-5">My Team</header>
    <div class="card mx-auto" style="width: 18rem;">
        <div class="card-header bg-primary text-white fs-4">
          ${data.employeeName}
        </div>
        <div class="bg-primary text-white fs-5 text-center">${data.role}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">GitHub (if applicable): ${data.github}</li>
          <li class="list-group-item">School (if applicable): ${data.school}</li>
        </ul>
      </div>
</body>
</html>
    `
    
}

module.exports = generateHTML;
