
Person.instances=0;


import {Person} from './person.js';
import {Student} from './student.js';
import {Employee} from './employee.js';
import {Manager} from './manager.js';


let firstman = new Person('salmanov', 'victor');
firstman.show();

let secondman = new Student('salmanov', 'victor','02.04.1997');
secondman.show();

let thirdman = new Employee('salmanov', 'victor',40000);
thirdman.setdataOfSalary(20000);
thirdman.setdataOfSalary(110000);
thirdman.show();

let fourthman = new Manager('salmanov', 'victor',40000);
fourthman.setdataOfSalary(110000);
fourthman.getdataOfSalary();
fourthman.setdataOfSalary(99990);
fourthman.dataOfSalary[2]='haha';
//fourthman.setdataOfSalary(-99990);
fourthman.show();
fourthman.showNumberOfPeople();

let fifthman = new Manager('malanin', 'petr',30000);
fifthman.addSubordinateEmployee('ivan');
fifthman.addSubordinateEmployee('kolya');
fifthman.removeSubordinateEmployee();
fifthman.setdataOfSalary(24232);
fifthman.setdataOfSalary(23423);
fifthman.setdataOfSalary(4232);
fifthman.show();





//  npm i --save-dev @babel/core @babel/cli @babel/node @babel/preset-env