var person = {
    firstname: "Suresh",
    lastname: "Kumar",
    age: 34,
    gender: "Male",
};
console.log(person);
var student = {
    firstname: "Suresh",
    lastname: "Kumar",
    employeeId: 101,
    age: 30,
    gender: "Male",
};
console.log(student);
var error = 401, errorcode = 401;
console.log(error);
var Fresher = /** @class */ (function () {
    function Fresher() {
        this.firstname = "Ram";
        this.lastname = " Kumar";
        this.role = "Software Developer";
    }
    Fresher.prototype.getName = function () {
        return "Hello I am ".concat(this.firstname, " ").concat(this.lastname, ".");
    };
    Fresher.prototype.getEmployeeId = function () {
        return "My Role is a ".concat(this.role);
    };
    return Fresher;
}());
var students = new Fresher();
console.log(students);
console.log(students.getName());
console.log(students.getEmployeeId());
