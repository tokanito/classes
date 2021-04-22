
export class Person {    
    constructor(surname,name){
        this.surname = surname;
        this.name = name;
        Person.instances+=1;     
       
    }
    show (){
        console.log (this);
    }
    showNumberOfPeople(){
        console.log (Person.instances);
    }
}


