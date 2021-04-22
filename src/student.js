import {Person} from './person.js';
 export class Student extends Person {
    constructor(surname,name,dateOfBirth){    
        super(surname,name);
        this.dateOfBirth=dateOfBirth;
    }
    show(){
        super.show();
    }
}

