/*
Hộp thoại tạo thông báo
1, alert
2, confirm
3, console
4, prompt
 */

var fullName = 'Trịnh Khắc Tuấn'

//alert
alert(fullName)//in ra bảng thông báo chỉ có button 'OK'

//confirm
confirm(fullName)//in ra bảng thông báo có button 'OK' và 'Cancle'

//console
console.log(fullName)//in ra ở phần console
console.error(fullName)//in ra dạng lỗi màu đỏ
console.warn(fullName)//in ra dạng cảnh báo màu vàng

//prompt
prompt('Xác nhận độ tuổi')//in ra thông báo và có thể điền thông tin vào bảng

/*
Cài đặt thông báo
1, setTimeout
2, set interval
*/

//set timeout: Cài thời gian mong muốn để chạy đoạn code
setTimeout(function() {//funcion là tham số truyền vào phương thức
    alert('Thong bao')
}, 1000)//1000ms là tham số thời gian được cài để chờ hiện thông báo

//set interval: tương tự set timeout nhưng là chạy liên tục
setInterval(function() {
    console.log(fullName)
}, 1000)