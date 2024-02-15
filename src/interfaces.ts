//Typescript-Interfaces
//Interfaces-Only work with objects
interface User {
    name:string,
    age:number,
    gender:string,
}
const person:User = {
    name:"Suresh",
    age: 34,
    gender:"Male",
}
console.log(person);

// //Function Interfaces
// interface Function{
//     (x:number,y:number):number
// }
// let addition:Function=(p1:number,p2:number)=>{
//     return p1 + p2;
// }

//Extending the Interfaces

interface Employee extends User{
    employeeId:number;
}
const enter :Employee = { 
    name:"Suresh",
    employeeId:101,
    age:30,
    gender:"Male",
}
console.log(enter);

//types cant be replaced with the interfaces
//interfaces only works with the objects
// interface strOrNum = string | number
// let errorCode:strOrNum = 401,
// errorcode = 401,
type strOrNum = string | number
let error:strOrNum = 401,
errorcode = 401;
console.log(error);

interface Person {
    firstname:string;
    lastname:string;
    role:string;
    getName():string;
    getEmployeeId():string;
}
class Fresher implements Person{
    firstname = "Ram";
    lastname= " Kumar";
    role="Software Developer";
    getName(){
        return  `Hello I am ${this.firstname} ${this.lastname}.`;
    }
    getEmployeeId(){
        return `My Role is a ${this.role}.`;
    }
}
const studentname:Person= new Fresher();
console.log(studentname);
console.log(studentname.getName());
console.log(studentname.getEmployeeId());