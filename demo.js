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
// let funct = () => {
//     console.log("Hello World");
// }
// funct()
// let demo: Function
// demo = () => {
//     console.log("Good Evening");
// }
// demo()
// let test = (a: number, b: string) => {
//     return a + b
// }
// console.log(test(1, "way"));
// let practice = (a:number,b:number,c?:number)=>
// {
//     console.log(a+b+c);
// }
// practice(1,2);
// practice(1,2,3);
// const fun = (a:number,b:number=10):number=>
// {
//     return(a+b);
// }
// console.log(fun(1))
// console.log(fun(1,4))
// const fun1 = (a:number,b:string="hello"):void=>
// {
//     console.log(a+b);
// }
// fun1(1)
// fun1(1,"hi")
// *** (Aliases) ***  we can store the data types and used for reusability
// type mark =number
// let tamil :mark=100
// let english:mark=79
// let maths:mark=95
// let science:mark=92
// let social:mark=98
// console.log("totalmark : "+" "+(tamil+english+maths+science+social));
// type name = string
// type age = number|string
// let fun = (fname:name,age:age)=>
// {
//     console.log(fname+" age is "+age);
// }
// fun("kavippiriyan",22)
// *** (Function Signature) ***
var student;
student = function () {
    return 5;
};
console.log(student());
var func;
func = function (fname, lname) {
    return fname + lname;
};
console.log(func("kavi ", "s"));
var fun;
fun = function (a, b) {
    console.log(a + b);
};
fun(true, " soul");
