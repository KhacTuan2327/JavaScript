var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 50 
    },
    {
        id: 2,
        name: 'HTML/CSS',
        coin: 100
    },
    {
        id: 3,
        name: 'React JS',
        coin: 50
    }
];
var i=0;
var totalCoin = courses.reduce((total, course) => {
    i++;
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': total
    });
    return course.coin+total;
},0)

console.log(totalCoin)
//accumalator: biến tích trữ sẽ thay đổi theo mỗi lần callback
//currentValue: giá trị hiện thời
//currentIndex: chỉ mục hiện thời
//Khi k có giá trị khởi tạo thì mặc định lấy phần tử đầu tiên làm giá trị khởi tạo và kiểu của kết quả trả về cũng trùng với kiểu của gtkt
//Bai tap
//Flat: Làm phẳng mảng từ Depth Array 
var depthArr = [1,2,[3,4],[5,6,7],[8,9,10,11]];
var flatArr = depthArr.reduce((flatOut, depthItem) => {
    return flatOut.concat(depthItem);
}, [])
console.log(flatArr);

//Tạo 1 phương thức mới tương tự reduce(sử dụng prototype để định nghĩa)
Array.prototype.reduce2 = function(callBack, result) {
    let index = 0
    if (arguments.length<2) {
        index = 1;
        result = this[0];
    }
    for (; index < this.length; index++) {
        // callBack(accumalator, currentValue, currentIndex, Array);
        result = callBack(result, this[index], index, this);
    }
    return result;
}
const result = flatArr.reduce2((total, number)=>{
    return total + number;
})
console.log(result);