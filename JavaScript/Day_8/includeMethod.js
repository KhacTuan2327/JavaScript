//phương thức includes() trả về giá trị true khi trong chuỗi(mảng) có chứa phần tử tìm kiếm, ngược lại thì là false
//phương thức includes() chỉ được sử dụng đối với biến có kiểu mảng hoặc chuỗi
/*phương thức includes() chứa 2 tham số là giá trị của chuỗi ký tự trong chuỗi hoặc 1 phần tử trong mảng, tham số tiếp theo
là vị trí bắt đầu tìm kiếm*/
//Ex: 
let fullName = 'Trinh Khac Tuan';
console.log(fullName.includes('Trinh', 0)); //true
let arrayTest = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(arrayTest.includes(5)); //true