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


// -----------------------------------------------------------------------------------------------------



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