const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    // MANAGER QUESTIONS
    {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
    },
    {
        name: "title",
        type: "input",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
    },
    // MEMBER QUESTION

    {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
    },
        // ENGINEER QUESTIONS

    {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
    },
    // INTERN QUESTIONS
    {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
    },
    {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
    },
    

]).then ((response)=>{
    fs.writeFile("team.html", `
   
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
      
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
    
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>

   



    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    





    `, function(err) {
        if (err) {
          return console.log(err);
        }})
})