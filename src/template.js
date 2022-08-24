const createTeam = (team) =>{
    const createManager = (manager) =>{
        return `
        <div class="card team-card shadow p-3 mb-5 bg-white rounded">
        <div class="card-header bg-success text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</h3>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href='Email'>${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    
        </ul>
        </div>`;
    };
    const createEngineer = (engineer) => {
        return `
        <div class="card team-card shadow p-3 mb-5 bg-white rounded">
        <div class="card-header bg-success text-white">
        <h2 class="card-title">${engineer.getName()}</h2>        
        <h3 class="card-title"><i class="fa-solid fa-atom"></i>${engineer.getRole()}</h3>
        </div>         
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href='Email'>${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href = 'https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a></li>
    
        </ul>
        </div>`;
    };
    const createIntern = (intern) => {
        return `
        <div class="card team-card shadow p-3 mb-5 bg-white rounded">
        <div class="card-header bg-success text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-graduation-cap"></i>${intern.getRole()}</h3>
        </div>       
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href='Email'>${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
    
        </ul>
        </div>`;
    };


    const createHtml = [];

    createHtml.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => createManager(manager)).join(''));
    createHtml.push(team.filter((employee) => employee.getRole() === 'Engineer').map((engineer) => createEngineer(engineer)).join(''));
    createHtml.push(team.filter((employee) => employee.getRole() === 'Intern').map((intern) => createIntern(intern)).join(''));

    return createHtml.join('');
};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/e84ea757da.js" crossorigin="anonymous"></script>
</head>
<body>
    
    <nav class="navbar navbar-dark bg-danger">
        <H1 class="mx-auto text-white">My Team</H1>
    </nav>

    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="team-cards col-6 d-flex flex-md-wrap justify-content-around">
                ${createTeam(team)}
            </div>
        </div>
    </div>


</body>

</html>
`
}