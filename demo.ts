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



//  ** (string) **


// var word = "Good Evening"
// var word1 = " all"
// var word2 = " of you"

// console.log("charAt(0) : "+word.charAt(0));
// console.log("charCodeAt(1) : "+word.charCodeAt(1));
// console.log("concat : "+word.concat(word1).concat(word2));
// console.log("replace : "+word.replace("Evening","Noon"));
// console.log("split : "+word.split(" "));
// console.log("split : "+word.split(" ",1));
// console.log(word2.substring(1,5));
// console.log("toUpperCase : "+word1.toUpperCase());
// console.log("toLowerCase : "+word2.toLowerCase());
// console.log("trim : "+word1.trim());



// ** (Number) **

// let number:number
// number =10
// number = parseInt("25")
// number = 10.2
// number = Infinity*2
// console.log(number);



//   Condtional statements  

/* 1. if else  2. switch  3. ternary  */


// let num = 1000 
// let num2 =0 
//  let num3 = -1

// let largest = num
// let smallest = num


// if(largest<num2 && num3<num2)
// {
//     largest=num2
// }
// else if (largest<num3 && num3>num2)
// {
//     largest = num3
// }
// else if (smallest>num2 && num2<num3)
// {
//     smallest=num2
// }
// else if (smallest>num3 && num3<num2)
// {
//     smallest=num3
// }
// else
// {
//     smallest=num
//     largest=num
// }

// console.log("smallest value : "+smallest);
// console.log("largest value : "+largest);


//   switch


// var username = "praveen"

// username = "kesavan"
// username = "naveen"
// username = "sankar"
// username = "arun"
// username = "mohan"


// switch(true)
// {
//     case(username.charAt(0)=="p"):
//     console.log("My name is praveen");
//     break;

//     case(username.charAt(0)=="k"):
//     console.log("My name is kesavan");
//     break;

//     case(username.charAt(0)=="s"):
//     console.log("My name is sankar");
//     break;

//     case(username.charAt(0)=="n"):
//     console.log("My name is naveen");
//     break;

//     case(username.charAt(0)=="a"):
//     console.log("My name is arun");
//     break;

//     default:
//         console.log("I'm mohan");
        
    
// }


// loops


// var i =1

// while(i<=10)
// {
//     console.log(i);
//     i++
  
// }

// do 
// {
//     console.log(i);
//     i++
    
// }while(i<=10)


// for(let i=0;i<=10;i++)
// {
//     if(i==8)
//     {
//         console.log("I'm ",i," years old");
//         continue;
//     }
//     console.log("i am ",i+" years old");
    
// }


// let str = "Good Morning How All Of You!"

// let split = str.split(" ")
// let join : string[]=[]

// for(let i=0; i<split.length;i++)
// {
//     if(split[i]=="How")
//     {
//         break;
//     }
//    join.push(split[i])
    
// }
// console.log(join);


//   ** (2d Array) **

// let arr : number[][]=[ [1,2],[3,4]]

// for(let i in arr)
// {
//     for(let j in arr[i])
//     {
//         console.log(arr[i][j]);
        
//     }
// }

// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr.length;j++)
//     {
//         console.log(arr[i][j]);
        
//     }
// }

// let arr = [1,2,"hello"]

// let arr1 = arr.forEach((value)=>
// {
//     value+"world"
// })
// console.log(arr1);


// ** (enum) **   We can store the constant values

// enum user
// {
//     name,
//     age,
//     address
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user.address);


// enum user
// {
//     name=1,
//     age=10,
//     address="nasiyanur"
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user.address);


// enum user
// {
//     name,
//     age,
//     address="nasiyanur"
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user.address);



// enum user 
// {
//     name,
//     age = userage(),
//     address = "naisyanur"
// }

// console.log(user['address']);
// console.log(user['age']);


// function userage():number
// {
//     return 22
// }



//  ** (foreach) **
    
// let arr = [1,2,3,4,5]

// let arr1 : Array <number> =[]

// arr.forEach((value)=>
// {
//     if(value%2!=0)
//     {
//         arr1.push(value)
//     }
// })

// console.log(arr1);


// arr.forEach(value=>console.log(value));


//  ** (map) **


// let array = ["Have","a","nice","day","to","you"]

// let arr = array.map(value=>
//     {
//         if(value.length>=3)
//         {
//             return value
//         }
//     })

//     console.log(arr);


//     for(let i in arr)
//     {
//         if(arr[i]===undefined)
//         {
//             arr[i]="*"
//         }
//     }

//     console.log(arr);
    


// ** (interface) **


// interface add
// {
//     x:number
//     y:number
//     add():void
// }

// interface sub extends add
// {
//     a:number
//     b:number
//     sub():void
// }

// class join implements sub
// {
//     x = 10
//     y=20
//     a=20
//     b=20
//    add()
//    {
//     console.log("add : " ,this.x+this.y);
    
//    }
//    sub()
//    {
//     console.log("sub : ",this.a-this.b);
    
//    }

// }

// let obj = new join()
// obj.add()
// obj.sub()



// *** (method overriding) ***

// class a
// {
//     a:number
//     constructor (a:number)
//     {
//         this.a=a
//     }
// }

// class b extends a
// {
//     b:number
//     constructor(a:number,b:number)
//     {
//         super(a)
//         this.b=b
        
//     }

//     add():void
//     {
//         console.log(this.a+this.b);
        
//     }
// }

// let obj = new b(1,2)

// obj.add()


class add
{
    x:number = 10
    y:number = 20

    add():void
    {
        console.log("class  add : ",this.x+this.y);
        
    }

    
}

class add1 extends add
{ 
    x:number = 20
    y:number = 40

    add():void
    {
        console.log("class  add1 : ",this.x+this.y);
        
    }

    
}

class add2 extends add1
{ 
    x:number = 50
    y:number = 50

    add():void
    {
        console.log("class  add2 : ",this.x+this.y);
        
    }

    
}

let obj1 = new add()
obj1.add()

let obj2 = new add1()
obj2.add()

let obj3 = new add2()
obj3.add()