var number = 2307.2710;
console.log(Number.isFinite(number));//Xác định xem đó có phải là số hữu hạn
console.log(Number.isInteger(number));//xác định xem đó có phải số nguyên không
console.log(Number.parseFloat(number));//chuyển đổi chuỗi đã cho thành số thực
console.log(Number.parseInt(number));//chuyển đổi chuỗi đã cho thành số nguyên
console.log(number.toFixed());//chuyển đổi và trả về số đã cho dưới dạng chuỗi
console.log(number.toString());//chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau số thập phân 
console.log(Number.isNaN(number)); //kiểm tra giá trị của biến xem có trả về false hay không