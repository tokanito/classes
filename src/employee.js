import {Person} from './person.js';
export class Employee extends Person {
    constructor(surname,name,salary){    
        super(surname,name);
        this.salary=salary;
        this.dataOfSalary=[];
    }
    show(){
        super.show();
    }
    addPayDaySalary(sumAmount){
        let date=new Date ();
        this.dataOfSalary.push(date.toLocaleDateString()+' получил '+sumAmount+' рублей');
    }
}
