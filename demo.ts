//   **(Array)**


let array = [1,2,3,4];
array.push(5)
console.log(array);

let arr :string[] = ["Good","Evening"]

arr.push("All")
console.log(arr);

// **(union type)**
let arr1 : (number|boolean)[] =[true,2]

arr1.push(5)
arr1.push(false)
console.log(arr1);

