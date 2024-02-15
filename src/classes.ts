//Typescript-Classes
class Student {
    readonly _name:string="Ramesh";
    _age = 0;
    constructor(name:string,age:number){
        this._name=name;
        this._age=age;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    set age(value:number){
        this._age=value;
    }
    functionname(){
        console.log(this.name);
        console.log(this.age);
    }
}
const details:Student=new Student("Suresh",34);
details.age = 34;
console.log(details.name);
console.log(details.age);
details.functionname();