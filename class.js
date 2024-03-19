"use strict";
// ----- class and objects -----
// class sample
// {
//     x:number=10;
//     y:string="Ben";
//     fun = ():any =>
//     {
//         console.log(this.y+this.x);
//     }
// }
// let obj = new sample()
// obj.fun()
// ---------------------------------------------------------------------------------------------------
//  *** (class) ***
// class student 
// {
//     readonly name:string
//     age:number
//     constructor (n:string,a:number)
//     {
//         this.name=n
//         this.age=a
//     }
//     return()
//     {
//             return `${this.name} age is ${this.age}`
//     }
// }
// let obj = new student("sam",22)
// let obj1 = new student("peter",30)
// console.log(obj.return());
// console.log(obj1.return());
// let arr: student[]=[]
// arr.push(obj)
// arr.push(obj1)
// console.log(arr);
// obj.name = "tiger" // We can't assign any values because of readonly
// *** (tuple) ***
// let arr : [number]=[1,2,3,4,5]
// let obj:[{},string[]]=[{
//     name:"",
//     age:""
// },["hello"]]
// console.log(obj);
// let obj1:[number,string,boolean[],(number|boolean)[]] = [1,"hi",[true],[true,1]]
// console.log(obj1);
//  ---------------------------------------------------------------------------------
