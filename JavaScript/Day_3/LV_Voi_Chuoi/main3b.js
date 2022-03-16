//Làm việc với chuỗi

var myString = 'Cố lên Tuấn ơi!';
/*
Keyword: Javascript string methods
*/
//1, Length: Độ dài của chuỗi
console.log(myString.length)

//2, Find index: Tìm kiếm ký tự
console.log(myString.indexOf('n'));// vị trí của chuỗi đầu tiên tìm được
console.log(myString.indexOf('n',7))
console.log(myString.search('n'));

//3, Cut string: cắt chuỗi
console.log(myString.slice(-3,-1));

//4, Replace : ghi đè chuỗi
console.log(myString.replace('Tuấn', 'Anh'));

//5, Convert to upper case: chuyển đổi tất cả chuỗi thành chữ hoa
console.log(myString.toUpperCase());

//6, Convert to lower case: chuyển đổi chuỗi thành chữ cái thường
console.log(myString.toLowerCase);

//7, Trim: loại bỏ khoảng trắng thừa ở 2 đầu
console.log(myString.trim());

//8, Split: cắt chuỗi thành mảng
var language = 'Javascript, PHP';
console.log(language.split(', '));

//9, get a character by index : lấy từng kí tự trong chuỗi theo vị trí
console.log(myString.charAt(5));
