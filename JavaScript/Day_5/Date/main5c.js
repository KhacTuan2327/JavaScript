//Đối tượng Date

// var date = Date();

// console.log(date);

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
console.log(`${year} ${month} ${day}`);