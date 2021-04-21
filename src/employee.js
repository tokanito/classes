class Employee extends Person {
    constructor(surname,name,salary){    
        super(surname,name);
        this.salary=salary;
        this.dataOfSalary=[];
    }
    show(){
        super.show();
    }
    addPayDaySalary(date,sumAmount){
        this.dataOfSalary.push(date+' получил '+sumAmount+' рублей');
    }
}