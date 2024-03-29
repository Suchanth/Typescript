//Typescript functions
//Function Types
function printName() {
  console.log("Ramesh");
}
printName();

//Function with Parameters
let add = (a: number, b: number) => {
  return a + b;
};
console.log(add(45, 60));

//Function with return types
let sub = (a: number, b: number): number => {
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
let mult = (a: number, b: number, c?: string | number): number => {
  if (typeof c === "number") {
    return a * b * c;
  }
  console.log(c);
  return a * b;
};
console.log(mult(5, 6));

//Function with Default values
let mul = (a: number, b: number, c: string | number=10): number => {
  if (typeof c == "number") {
    return a * b * c;
  }
  console.log(c);
  return a * b;
};
console.log(mul(3, 4));
