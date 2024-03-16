
// module

// import { student1 } from "./module";

// let obj = new student1()


// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.work);

// -----------------------------------------------------------------------------------------

// import {months,fruit,one,varibale} from './module'



// one();
// console.log(varibale);

// interface fruit2 extends fruit
// {
//     fname1:string
//     color1:string
//     quantity1:string
// }

// var fruitlist:fruit2=
// {
//     fname:"Cucumber",
//     fname1:"Mango",
//     color:"green",
//     color1:"yellow",
//     quantity:"200",
//     quantity1:"100"


// }

// console.log(fruitlist.fname," : ",fruitlist.color," : ",fruitlist.quantity);
// console.log(fruitlist.fname1," : ",fruitlist.color1," : ",fruitlist.quantity1);


// const object = new months()

// console.log(object.month1);
// console.log(object.month2);
// console.log(object.month3);

// ----------------------------------------------------------------------------------

//  **** (Namespace) ****

// namespace players{

// export class players
// {
//      players = 
//      {
//         player1:"Rohit",
//         player2:"Kholi",
//         player3:"Dhoni",

//      }
//      pl1skill:string
//      pl2skill:string
//      pl3skill:string

//      constructor (a:string,b:string,c:string)
//      {
//         this.pl1skill = a
//         this.pl2skill = b
//         this.pl3skill = c
//      }

//      fun = function ()
//      {
//         console.log(this.players.player1," ",this.pl1skill)
//         console.log(this.players.player2," ",this.pl2skill)
//         console.log(this.players.player3," ",this.pl3skill)
//      }
// }
// }

// ------------------------------------------------------------------------------------


// export var favourtiecolor = "green"

// export function math()
// {
//     console.log(Math.floor(50.265));
    
// }

// export interface languages
// {
//     l1:string
//     l2:string
//     l3:string
// }




// -------------------------------------------------------------------------------------

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


// let student:()=>number

// student =()=>
// {
//     return 5
// }
// console.log(student());


// let func:(a:string,b:string)=>string

// func = (fname:string,lname:string)=>
// {
//     return fname+lname
// }

// console.log(func("kavi ","s"));


// let fun : (a:boolean,b:string)=>void

// fun = (a:boolean,b:string)=>
// {
//     console.log(a+b);

    
// }

// fun(true," soul")




let set = new Set()

set.add("Hello")
set.add("Welcome Buddy!")
set.add(0)
console.log(set);

 set.forEach(value=>
    {
       console.log(value);
       
    })



console.log(set.has(0));
// console.log(set.clear());

console.log(set.delete(0));
console.log(set);

console.log(set.entries());
console.log(set.values());
console.log(set.size);




    




