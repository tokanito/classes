import {Person} from './person.js';
export class Employee extends Person {
    constructor(surname,name,salary){    
        super(surname,name);
        this.salary=salary;
        this.dataOfSalary=[];
    }
    
    getdataOfSalary() {
        console.log (this.dataOfSalary);
        return this.dataOfSalary;
    }
    show(){
        super.show();
    }
    setdataOfSalary(sumAmount){
        if (sumAmount < 0) throw new Error("Отрицательное количество");
        let date=new Date ();
        this.dataOfSalary.push(date.toLocaleDateString()+' получил '+sumAmount+' рублей');
    }
}
