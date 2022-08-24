//create employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //will return name
    getName(){
        return this.name;
    }
    //will return id of user
    getId(){
        return this.id;
    }
    
    //will return email
    getEmail(){
        return this.email;
    }

    //will get roll
    getRole(){
        return 'Employee';
    }

}

module.exports = Employee;
