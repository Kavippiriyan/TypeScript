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


let value : any 
value ="hello"
value = 2
console.log(value);


let arr : any[] = [1,true,"hi"]

console.log(arr);


let obj :
{
    sentence:any
    length:any

}


obj = {sentence:"hello world",length:11}

console.log(obj);
