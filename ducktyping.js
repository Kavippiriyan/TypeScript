// interface employee {
//     name: string
//     age: number
//     salary: number
// }
// let emp: employee =
// {
//     name: "Deva",
//     age: 25,
//     salary: 40000
// }
// console.log(emp.name);
// console.log(emp.salary);
// console.log(emp.age);
// let emp1 =
// {
//     name: "Veda",
//     age: 30,
//     salary: 50000,
//     city: "chennai"
// }
// emp = emp1
// console.log(emp.name);
// console.log(emp.city); // we can't access city because it is not mentioned in interface
var a = /** @class */ (function () {
    function a() {
        this.name = "hello";
    }
    return a;
}());
var b = /** @class */ (function () {
    function b() {
        this.name = "hi";
        // name = 20  // this is not possible to add
        this.age = 20;
    }
    return b;
}());
var obj = new a();
var obj1 = new b();
console.log(obj.name);
obj = obj1;
console.log(obj.name);
