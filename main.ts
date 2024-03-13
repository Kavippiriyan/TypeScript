// function Welcome() {
//     console.log("Hello World");
// }
// Welcome();


// let fname= "kavippiriyan"
// console.log(fname);


// let age;

// age=22;
// console.log(typeof age);
// age="22"

// console.log(typeof age);


// let a: number = 5;
// let b: string
// let c: boolean
// let d: any
// let e: number[] = [1, 2, 3]
// let f: any[] = [1, "Hi", true]

// console.log(a);

// -----  enum -----

// enum fruits { apple = "red", banana = "yellow", goa = "green" }
// console.log(fruits.apple);
// console.log(typeof fruits);


// enum numbers { jan = 1, feb = 2, mar = 3 }

// console.log(numbers.feb);


// -----  Type assertion ----

// let word = 'Hello World';

// console.log(word.charAt(1));

// let word1;
// word1 = "Happy March"

// const stringmethod1 = (word1 as string).charAt(1)
// console.log(stringmethod1);

// const stringmethod2 = (<string> word1).charAt(6)
// console.log(stringmethod2);

//  ----- Arrow Functions -----


// let fun = ()=>"Hello"; //let fun = ()=> return "Hello";

// console.log(fun());


// const func = (message)=> message

// console.log(func("Good Evening"));



// ------- interface -------


// interface values {
//     x: number
//     y: number
//     z: number
//     def: () => void
// }



// let funct=()=>
// {
// console.log("Iam function");

// }

// let func = (point: values) => point.x + point.y + point.z
// let functcall = (point:values)=> console.log(
//  point.def());

// console.log(func({ x: 1, y: 2, z: 3 ,def:funct}));




// interface interface
// {
//     x:number
//     y:number
//     z:()=>void
// }

// let values : interface = 
// {
//     x:20,
//     y:40,
//     z:()=>
//     {
//         console.log(values.x+values.y);
        
//     }
// }
    
// values.z();

// console.log(values.x);
// console.log(values.y);
// console.log(values);


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



// ------ constructor -------

// class demo 
// {
//     a:number
//     b:string
//     c:boolean

//     constructor (a:number,b:string,c:boolean)
//     {
//        this.a=a;
//        this.b=b;
//        this.c=c;
//        console.log(this.a+this.b+this.c);
        
//     }
    // assign = ():any =>
    // {
    //     console.log(this.a+this.b+this.c);
        
    // }
// }


// let obj1 = new demo(2,"day",true)

// obj1.assign()



// class demo1 
// {
//     a:number
//     b:string
//     c:boolean

//     constructor (a?:number,b?:string,c?:boolean)  // ? when you can create object at the time you can assign value same time you can avoid value
//     {
//        this.a=a;
//        this.b=b;
//        this.c=c;
//        console.log(this.a+this.b+this.c);
        
//     }

// }


// --- access modifiers ---


// class test
// {
  

//     constructor (private x:number,public y:number,public z:number)
//     {
        
//     }
//     private fun = ():any =>
//     {
//         console.log(this.x);
//         console.log(this.y);
//         console.log(this.z);
        
//     }
//     function = ():any=>
//     {
//         this.fun()
//     }

// }

// const object = new test(1,2,3)

// // object.fun()
//                      // we can't access beacuase of private
// // object.x = 20 

// object.y=30
// object.function()


// ------   get,  set  ------


class test
{
  

    constructor (private x:number,public y:number,public z:number)
    {
        
    }
    private fun = ():any =>
    {
        console.log(this.x);
        console.log(this.y);
        console.log(this.z);
        
    }
    function = ():any=>
    {
        this.fun()
    }
    get X()
    {
        return this.x
    }
    set X(value)
    {
        this.x=value
    }

}

const object = new test(1,2,3)

// object.fun()
                     // we can't access beacuase of private
// object.x = 20 

object.y=30
object.function()
console.log("Get value "+object.X);

object.X = 30;
console.log("Set value "+object.X);
