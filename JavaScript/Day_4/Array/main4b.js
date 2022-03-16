var languages = [
    'English',
    'Vietnamese',
    'Chinese',
]
console.log(languages);
console.log(typeof languages);
console.log(Array.isArray(languages));//Kiểm tra kiểu của mảng có phải array hay không (boolean)
//1, to String 
console.log(languages.toString());//chuyển arry thành chuỗi

//2, Pop: xóa đi và trả về phần tử ở cuối mảng và trả về nó
console.log(languages.pop());

//3. Push : thêm phần tử vào cuối mảng
console.log(languages.push('Japanese'));
console.log(languages);

//4, Shift: Xóa đi và trả về phần tử ở đầu mảng
console.log(languages.shift());
/*
Lưu ý: Khi xóa phần tử dù ở đầu hay ở cuối mảng mà khi mảng đã hết thì sẽ 
trả về giá trị undefined
*/

//5, Unshift: Thêm một hoặc nhiều phần tử vào đầu mảng
console.log(languages.unshift('America')); 
console.log(languages);

//6: Sclicing: có thể dùng để xóa, chèn hay thêm vào mảng
languages.splice(1,1, 'Thailand')//Tham số thứ nhất là chỉ số của phần tử cần xóa 
//tham số thứ 2 là số phần tử muốn xóa kể tử tham số thứ nhất
//chuỗi sau cùng là chuỗi thêm vào vị trí vừa xóa
console.log(languages);

//7, concat: nối 2 mảng với nhau
var national = [
    'Thailand',
    'Lao',
    'VietNam',

];
console.log(languages.concat(national));

//8, slicing: cắt phần tử của mảng
console.log(languages.slice(1,2))
