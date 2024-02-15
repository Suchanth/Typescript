//Typescript-Type Aliases
//Primitive types
type Username=string
type YesorNo = boolean
type Age = number
let username:Username="Lokesh Kanagaraj"
let isDirector:YesorNo=true
let isAge:Age=34
console.log(username);
console.log(isDirector);
console.log(isAge);

//Arrays
type NamesArray = string[]
let userName:NamesArray=['a','b'];
console.log(userName)

//Objects
type Objectname = {
    username:Username,
    isAge:Age,
    isDirector:YesorNo
}
let users:Objectname={username:"Ramesh",isAge:34,isDirector:true}
console.log(users);

//Unions
type StrorNum = string | number
let errorCode:StrorNum = 401;
console.log(errorCode);

//Tuples
type NumorAge = [name:string,age:number]
let tuples:NumorAge = ['Lokesh Kanagaraj',34];
console.log(tuples);