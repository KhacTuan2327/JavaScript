/*
CHUỖI TRONG JAVASCRIPT 
1, Tạo chuỗi
        - Cách tạo chuỗi
        - Nên dùng cách nào? Tại sao?
        - Kiểm tra data type
2, Một số case sử dụng backslash (\)
3, Xem độ dài chuỗi
4, Chú ý độ dài khi viết Code
5, Template string ES6 
*/

//1,Tạo chuỗi: 2 cách 
var fullName1 = 'Trinh Khac Tuan';
var fullName2 = new String('Trinh Khac Tuan');

console.log(typeof fullName1);// kiểu String
console.log(typeof fullName2);// kiểu Object

//2, backslash (\): dùng để hiển thị các kí tự dấu như "", '', \
//ví Dụ:
var bla = 'Day la dau \\ , \'';
console.log(bla);

//3, xem độ dài chuỗi 
console.log (fullName2.length);

//4, Chú ý độ dài
var introduct = 'Tôi tên là Trịnh Khắc Tuấn'
+ '\nLớp An ninh hệ thống thông tin'
+ '\nc155, d1';

console.log (introduct);

//5, Template string 
var firstName = 'Tuan';
var lastName = 'Trinh Khac';
console.log (`Toi la: ${lastName} ${firstName}`)