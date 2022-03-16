/*
Toán tử số học
1, +        --> Cộng
2, -        --> Trừ
3, *        --> Nhân
4, **       --> Lũy thừa
5, /        --> Chia 
6, %        --> Chia lấy dư
7, ++       --> Tăng 1 giá trị số
8, --       --> Giảm 1 giá trị số
 */

var a = 5;
var b = 3;

var c = a**b;

console.log(c);
var d = 5 + '5';
console.log(d);

/*
Sự khác nhau giữa tiền tố và hậu tố

Giả sử cho một biến a và biến aCopy

1, Tiền tố: 
aCopy = ++a;
Thì sẽ thực hiện gán biến aCopy với giá trị của a sau khi cộng
khi đó, sẽ trả về giá trị của aCopy = a = a+1

2, Hậu tố
aCopy = a++;
Thì sẽ thực hiện gán aCopy = a trước khi cộng
Khi đó, hàm sẽ trả về giá trị aCopy = a, còn nếu hàm trả về giá trả về 
a thì a = a+1; 

*/
var result = 1 + '2';
console.log(result);