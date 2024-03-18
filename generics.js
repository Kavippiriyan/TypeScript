// let arr : Array<string>
// arr = ["Good","Morning"]
// console.log(arr);
// let arr1 : number[]
// arr1 = [1,2,3]
// console.log(arr1);
// ----------------------------------------------------------
// let array = (x:number[]):number=>
// {
//     return x[x.length-1]
// }
// console.log(array([1,2,3,4,5]));
// let arr = (x:string[]):string=>
// {
//     return x[0]
// }
// console.log(arr(["Have","a","Good","Day"]));
// let arr = (array:Array<any>)=>
// {
//     return array[1]
// }
// console.log(arr([6,7,8,9,0]));
// console.log(arr(["good","decision"]));
// let arr1 = <T>(array:T[])=>
// {
//     return array[1]
// }
// console.log(arr1([6,7,8,9,0]));
// console.log(arr1(["good","decision"]));
// console.log(arr1<string>(["good","decision",0]));
// console.log(arr1(["good","decision",0]));
//--------------------------------------------------------------------------
// let makearr = (x: number) => {
//     console.log([x]);
// }
// makearr(5);
// let makearrfun = <T>(x: T) => {
//     console.log([x]);
// }
// makearrfun(0)
// makearrfun("Hello")
// let makearrfun1 = <T,Y>(x: T,y:Y):[T,Y] => {
//    return [x,y];
// }
// console.log(makearrfun1(0,2));
// console.log(makearrfun1("Hello","Welcome"));
// -------------------------------------------------------------------------------
// let arrfun = <X=string,Y=string>(a:X,b:Y):[X,Y]=>
// {
//     return [a,b]
// }
// console.log(arrfun<number>(2,"5"));
// console.log(arrfun("3","5"));
// -------------------------------------------------------------------------------------------------------
// array
var array = function (arr) {
    return arr;
};
console.log(array([1, 2, 3, 4, 5]));
var values = {
    stname: "Kavippiriyan",
    age: 22
};
console.log(values.stname);
console.log(values.age);
//  class
var A = /** @class */ (function () {
    function A(a, b, c) {
        this.TotalStudents = a;
        this.Totalstaff = b;
        this.TotalHours = c;
    }
    A.prototype.print = function () {
        console.log(this.TotalStudents);
        console.log(this.Totalstaff);
        console.log(this.TotalHours);
    };
    return A;
}());
var obj = new A(100, 20, 8);
obj.print();
