//Typescript-Classes
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = "Ramesh";
        this._age = 0;
        this.name = name;
        this._age = age;
    }
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.functionname = function () {
        console.log(this.name);
        console.log(this.age);
    };
    return Student;
}());
var details = new Student("Suresh", 34);
details.age = 34;
console.log(details.name);
console.log(details.age);
details.functionname();
