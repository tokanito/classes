 class Person {
    constructor(surname,name){
        this.surname = surname;
        this.name = name;
        // this.count=count;
        count++;
    }
    show (){
        console.log (this);
    }
    showNumberOfPeople(){
        console.log (count);
    }
}

