//requires the employee file
const Employee = require('./Employee')

//will create a class that will exten to employee 
class Engineer extends Employee{
    constructor(name, email, id, github){
        super(name, email, id)
        this.github = github;

    }
//returns the users github 
    getGithub(){
        return this.github;
    }
//returns the selected role
    getRole(){
        return 'Engineer';
    }
}

//will export engineer
module.exports = Engineer;