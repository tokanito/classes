import {Employee} from './employee.js';
export class Manager extends Employee {
    constructor(surname,name,salary){    
        super(surname,name,salary);
        this.listOfSubordinateEmployees=[];
        
    }
    show(){
        super.show();
    }
    setdataOfSalary(sumAmount){
        super.setdataOfSalary(sumAmount);
    }
    addSubordinateEmployee(employee){
        this.listOfSubordinateEmployees.push(employee);
    }
    removeSubordinateEmployee(){
        this.listOfSubordinateEmployees.pop();
    }
}