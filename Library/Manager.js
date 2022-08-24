//requires employee
const Employee = require('./Employee');

//create manager class that extends to employee file
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //will return managers office number
    getOfficeNumber(){
        return this.officeNumber;
    }
    //wil return manager
    getRole(){
        return 'Manager';
    }
}

//exports file
module.exports = Manager;
