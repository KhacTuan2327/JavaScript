//Loop method : Phương thức trong vòng lặp

var information = [
    {
        id: 1,
        name: 'Tuan',
        address: 'Thanh Hoa'
    },
    {
        id: 2,
        name: 'Tan',
        address: 'Thanh Hoa'
    },
    {
        id: 3,
        name: 'Manh',
        address: 'Thanh Hoa'
    },
    {
        id: 4,
        name: 'Ngan',
        address: 'Binh Phuoc'
    },
    {
        id: 5,
        name: 'Thuy',
        address: 'Ha Noi'
    }
];

//forEach(): dùng để gọi ra các phần tử của mảng (duyệt mảng)
information.forEach(function(a, index) {
    console.log(index,a);
})

//every(): Duyệt mảng xem tất cả những phần tử mảng thỏa mãn điều kiện gì đó
var xuThanh = information.every(function(a,index){
    return a.address === 'Thanh Hoa'
})
console.log(xuThanh);// trả về true nếu tất cả ở TH, ngược lại trả false

//some(): Duyệt mảng nếu chỉ cần 1 phần tử mang giá trị đúng thì trả về đúng
var haNoi = information.some(function(a, index){
    return a.address === 'Ha Noi'
})
console.log(haNoi)

//find(): Tìm kiếm phần tử đầu tiên trong mảng thỏa mãn điều kiện
var search = information.find(function(a, index){
    return a.address ===     'Thanh Hoa'
})
console.log(search)

//filter(): Tìm kiếm và in ra tất cả phần tử trong mảng thỏa mãn điều kiện
var filter = information.filter(function(a,index){
    return a.address === 'Thanh Hoa'
})
console.log(filter)

//map():  dùng để thay đổi, chỉnh sửa element của array
var map = information.map(function(information, index, originArray){
    return {
        id: information.id,
        name: information.name,
        address: information.address,
        age: 20,
        index: index
    }
})
console.log(map)