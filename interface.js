// ** (interface) **
var funct = function () {
    console.log("Iam function");
};
var func = function (point) { return point.x + point.y + point.z; };
var functcall = function (point) { return console.log(point.def()); };
console.log(func({ x: 1, y: 2, z: 3, def: funct }));
var values = {
    x: 20,
    y: 40,
    z: function () {
        console.log(values.x + values.y);
    }
};
values.z();
console.log(values.x);
console.log(values.y);
console.log(values);