//Typescript-Enums
//enum-group of constants
//Numeric
var directions;
(function (directions) {
    directions[directions["North"] = 0] = "North";
    directions[directions["East"] = 1] = "East";
    directions[directions["West"] = 2] = "West";
    directions[directions["South"] = 3] = "South";
})(directions || (directions = {}));
console.log(directions.North);
console.log(directions.East);
console.log(directions.West);
console.log(directions.South);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Success);
console.log(StatusCode.Unauthorized);
console.log(StatusCode.ServerError);
//Strings
var direction;
(function (direction) {
    direction["North"] = "North";
    direction["South"] = "South";
    direction["West"] = "West";
    direction["East"] = "East";
})(direction || (direction = {}));
console.log(direction.North);
console.log(direction.South);
console.log(direction.West);
console.log(direction.East);
