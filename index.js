//importing files
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Library/Engineer');
const Intern = require('./Library/Intern');
const Manager = require('./Library/Manager');
const generateHtml = require('./src/template.js')

//declaring array
const teamArr = [];

//creates user questions
function userQuestions(){

//function that asks what role the member has
function teamCreation(){ inquirer
.prompt([
    {
        type: 'list',
        message: 'What is their role?',
        name: 'userChoice',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish adding members'],
    },
])
.then(function (userInput){
    switch (userInput.userChoice) {
        case 'Manager': createManager();            
            break;
        case 'Engineer': createEngineer();
            break;
        case 'Intern': createIntern();
            break;
        default: teamMembers();
    }
})
}
//create manager function that prompts the user for manager info
function createManager(){
     inquirer
    .prompt([
        {
           type: 'input',
           message: 'What is the managers name?',
           name: 'managerName',
        },
        {
           type: 'input',
           message: 'What is the managers ID?',
           name: 'managerId',
        },
        {
           type: 'input',
           message: 'What is the managers email?',
           name: 'managerEmail',
        },
        {
           type: 'input',
           message: 'What is the managers office number?',
           name: 'managerOfNum',
        },
    ])
    .then((data) => {
        const manager = new Manager(
            data.managerName,
            data.managerId,
            data.managerEmail,
            data.managerOfNum,
        )
        teamArr.push(manager);
        teamCreation();
    })
}
//create engineer function that will prompt the user to enter the engineer info
function createEngineer(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter members name',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'Enter engineers ID',
            name: 'engineerId'
        },
        {
            type: 'input',
            message: 'Enter members email',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'Enter their Github name',
            name: 'githubName',
        },
    ])
    .then((data) => {
        const engineer = new Engineer(
            data.engineerName,
            data.engineerId,
            data.engineerEmail,
            data.githubName,
        )
        teamArr.push(engineer);
        teamCreation();
    })
}
//function that prompts the user to enter the interns info
function createIntern(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the interns name',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'Enter the interns ID',
            name: 'internId',
        },
        {
            type: 'input',
            message: 'Enter the interns email',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'Enter the interns school',
            name: 'internSchool',
        },
    ])
    .then((data) => {
        const intern = new Intern(
            data.internName,
            data.internId,
            data.internEmail,
            data.internSchool,
        )
        teamArr.push(intern);
        teamCreation();
    })
 }
//will generate an html file using the info the user entered
 function teamMembers(){
     fs.writeFile('./dist/index.html', generateHtml(teamArr), (err) =>
     err ? console.error(err) : console.log('Success! File has been created.'));
 }
 teamCreation();
}
//calls the userQuestion function
userQuestions();

