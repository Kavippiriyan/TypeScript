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


// *** (unknown type) ***


// let a:unknown
// let b=10
// a=10
// console.log(typeof a);

// a="world"
// console.log(typeof a);
// // a.uppercase() //not possible

// console.log((a as string).length);



// a=true
// console.log(typeof a);


// *** (operators) ***



//  arithmatic

// let a=10
// let b=20

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a**b);
// console.log(a%b);

// //  assignment


// let c=10
// let d=20

// console.log(a=b);
// console.log(a+=b);
// console.log(a-=b);
// console.log(a/=b);
// console.log(a**=b);
// console.log(a%=b);


// //   Relational / comparision


// let e=10
// let f=20

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);


// //   ternary operators


// let g=10
// let h=20

// console.log(g>h?true:false);


// //  logical operators


// let num =true;
// let num1 = false;

// console.log(num||num1);
// console.log(num&&num1);
// console.log(!num1);
// console.log(!num);


// //  unary operators


// let x=10

// let variable = x++;
// console.log(x);
// console.log(variable);

// let variable1 = ++x
// console.log(variable1);
// console.log(x);
