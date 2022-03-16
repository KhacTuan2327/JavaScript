//CallBack là hàm được truyền qua đối số 
//khi gọi hàm khác

//Điều kiện để là hàm call back:
//1, Là hàm
//2, Được truyền qua đối số của hàm
//3, Được gọi lại (trong hàm nhận đối số)
//Ex:
function myFunction(params) {
    if (typeof params === 'function') {
        params("Học JavaScript!"); //phải thêm điều kiện vì chỉ khi tham số là hàm thì mới truyền được giá trị vào 
        // không có điều kiện, truyền khác kiểu function vào sẽ bị lỗi
    }
}

function myCallback(value) {
    console.log("Title: " + value);
}

myFunction(myCallback);

//Định nghĩa lại map2
var nationals = ['VietNam', 'Korea', 'Japan', 'China', 'United States', 'France'];
Array.prototype.map2 = function (callback) {
    var arrLength = this.length;
    var output = [];
    if (typeof callback === 'function') {
        for (var i = 0; i < arrLength; i++) {
            var result = callback(this[i]);//hàm đang trả về đối số truyền vào là phần tử của mảng
            output.push(result); //thêm phần tử vào mảng trống là kết quả của hàm được gọi lại
        }
    }
    return output
}
var test = nationals.map2(function (national) {
    return (national); //hàm trả về đối số truyền vào
});
console.log(test.join('\n')); 