// module
// import { student1 } from "./module";
// let obj = new student1()
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.work);
//  **** (Namespace) ****
var players;
(function (players_1) {
    var players = /** @class */ (function () {
        function players(a, b, c) {
            this.players = {
                player1: "Rohit",
                player2: "Kholi",
                player3: "Dhoni",
            };
            this.fun = function () {
                console.log(this.players.player1, " ", this.pl1skill);
                console.log(this.players.player2, " ", this.pl2skill);
                console.log(this.players.player3, " ", this.pl3skill);
            };
            this.pl1skill = a;
            this.pl2skill = b;
            this.pl3skill = c;
        }
        return players;
    }());
    players_1.players = players;
})(players || (players = {}));
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
// import { players } from './demo' // this is for module
///<reference path='demo.ts'/> 
//next we have to give = tsc namespace.ts --outFile demo.ts
var object = new players.players("I'm Hitman", "I'm Fire", "I'm cool");
object.fun();
