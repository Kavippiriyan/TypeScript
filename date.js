//  date-month-year
var dateobj = new Date();
var date = dateobj.getDate();
var month = dateobj.getMonth();
var year = dateobj.getFullYear();
console.log("".concat(date, "/").concat(month, "/").concat(year));
// hour-minute-seconds
var timeobj = new Date();
var hour = timeobj.getHours();
var minute = timeobj.getMinutes();
var seconds = timeobj.getSeconds();
console.log("".concat(hour, "/").concat(minute, "/").concat(seconds));
