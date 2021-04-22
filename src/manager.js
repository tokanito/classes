import {Employee} from './employee.js';
export class Manager extends Employee {
    constructor(surname,name,salary){    
        super(surname,name,salary);
        this.listOfSubordinateEmployees=[];   
    }
    show(){
        super.show();
    }
    addPayDaySalary(date,sumAmount){
        super.addPayDaySalary(date,sumAmount);
    }
    addSubordinateEmployee(employee){
        this.listOfSubordinateEmployees.push(employee);
    }
}