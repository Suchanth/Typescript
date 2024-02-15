//Typescript-Enums
//enum-group of constants
//Numeric
enum directions{
    North,
    East,
    West,
    South,
}
console.log(directions.North);
console.log(directions.East);
console.log(directions.West);
console.log(directions.South);

enum StatusCode {
    Success = 200,
    Unauthorized = 401,
    ServerError = 500,
}
console.log(StatusCode.Success);
console.log(StatusCode.Unauthorized);
console.log(StatusCode.ServerError);

//Strings
enum direction {
    North = 'North',
    South = 'South',
    West = 'West',
    East = 'East'
}
console.log(direction.North);
console.log(direction.South);
console.log(direction.West);
console.log(direction.East);