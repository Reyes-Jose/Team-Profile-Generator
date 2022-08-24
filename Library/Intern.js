//will require employee file
const Employee = require('./Employee');

//creates the intern class and extends to the employee class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
//returns school name 
    getSchool(){
        return this.school;
    }
//returns intern
    getRole(){
        return 'Intern'
    }
}

//exports intern
module.exports = Intern;