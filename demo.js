// //   **(Array)**
// let array = [1, 2, 3, 4];
// array.push(5)
// console.log(array);
// let arr: string[] = ["Good", "Evening"]
// arr.push("All")
// console.log(arr);
// // **(union type)**
// let arr1: (number | boolean)[] = [true, 2]
// arr1.push(5)
// arr1.push(false)
// console.log(arr1);
// let value: string | number
// value = 5
// value = "hello"
// console.log(value);
// // ***(objects)***
// let obj = {
//     name:"kavi",
//     age:22
// }
// console.log(obj);
// console.log(obj.name+" age is "+obj.age);
// let obj1 : {
//     name: string
//     age:number
// }
// obj1 = {name:"kesavan",age:22}
// console.log(obj1);
// console.log(obj1.name+" age is "+obj1.age);
// ***(dynamic type -- any)***
// let value : any 
// value ="hello"
// value = 2
// console.log(value);
// let arr : any[] = [1,true,"hi"]
// console.log(arr);
// let obj :
// {
//     sentence:any
//     length:any
// }
// obj = {sentence:"hello world",length:11}
// console.log(obj);
// *** (functions) ***
var funct = function () {
    console.log("Hello World");
};
funct();
var demo;
demo = function () {
    console.log("Good Evening");
};
demo();
var test = function (a, b) {
    return a + b;
};
console.log(test(1, "way"));
var practice = function (a, b, c) {
    console.log(a + b + c);
};
practice(1, 2);
practice(1, 2, 3);
var fun = function (a, b) {
    if (b === void 0) { b = 10; }
    return (a + b);
};
console.log(fun(1));
console.log(fun(1, 4));
var fun1 = function (a, b) {
    if (b === void 0) { b = "hello"; }
    console.log(a + b);
};
fun1(1);
fun1(1, "hi");
