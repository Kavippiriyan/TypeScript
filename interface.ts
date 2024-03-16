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

//  ----------------------------------------------------------------------------------


// ------- interface -------


interface values {
    x: number
    y: number
    z: number
    def: () => void
}



let funct=()=>
{
console.log("Iam function");

}

let func = (point: values) => point.x + point.y + point.z
let functcall = (point:values)=> console.log(
 point.def());

console.log(func({ x: 1, y: 2, z: 3 ,def:funct}));




interface interface
{
    x:number
    y:number
    z:()=>void
}

let values : interface = 
{
    x:20,
    y:40,
    z:()=>
    {
        console.log(values.x+values.y);
        
    }
}
    
values.z();

console.log(values.x);
console.log(values.y);
console.log(values);
