
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
thirdman.addPayDaySalary(20000);
thirdman.addPayDaySalary(110000);
thirdman.show();
let fourthman = new Manager('salmanov', 'victor',40000);
fourthman.addPayDaySalary(110000);
fourthman.show();
let fifthman = new Manager('malanin', 'petr',30000);
fifthman.addSubordinateEmployee('ivan');
fifthman.addSubordinateEmployee('kolya');
fifthman.removeSubordinateEmployee();
fifthman.show();


secondman.showNumberOfPeople();
fourthman.showNumberOfPeople();
firstman.showNumberOfPeople();


//  npm i --save-dev @babel/core @babel/cli @babel/node @babel/preset-env