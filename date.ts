
//  date-month-year
let dateobj = new Date();

let date = dateobj.getDate();

let month = dateobj.getMonth();

let year = dateobj.getFullYear();


console.log(`${date}/${month}/${year}`);

// hour-minute-seconds

let timeobj = new Date()

let hour = timeobj.getHours()
let minute = timeobj.getMinutes()
let seconds = timeobj.getSeconds()


console.log(`${hour}/${minute}/${seconds}`);
