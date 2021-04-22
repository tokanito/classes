
export class Person {    
    constructor(surname,name){
        this.surname = surname;
        this.name = name;
        Person.instances+=1;
        // this.addcount=function(){
        //     var count=0;
        //     return count;
        // }
        this.count=1;
        // this.arr=new Set(this);
       
    }
    show (){
        console.log (this);
    }
    showNumberOfPeople(){
        console.log (Person.instances);
    }
}


