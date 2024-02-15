//Typescript functions
//Function Types
function printName() {
    console.log("Ramesh");
}
printName();
//Function with Parameters
var add = function (a, b) {
    return a + b;
};
console.log(add(45, 60));
//Function with return types
var sub = function (a, b) {
    //it is used to declare the type of the return value
    return a - b;
};
console.log(sub(56, 32));
//Function with Union Parameters
// let mult=(a:number,b:number,c:string | number):number=>{  //union paramters should be either or type (symbol for union-|)
//     if(typeof c == 'number'){
//         return a * b * c;
//     }
//     return a * b;
// }
// console.log((mult(3,4,5)))
//Function with Optional Parameters
var mult = function (a, b, c) {
    if (typeof c === "number") {
        return a * b * c;
    }
    console.log(c);
    return a * b;
};
console.log(mult(5, 6));
//Function with Default values
var mul = function (a, b, c) {
    if (c === void 0) { c = 10; }
    if (typeof c == "number") {
        return a * b * c;
    }
    console.log(c);
    return a * b;
};
console.log(mul(3, 4));
