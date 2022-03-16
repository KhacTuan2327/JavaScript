//Hãy xử lý để hàm trên trả về một mảng mới gồm các phần tử được chuyển đổi sang kiểu dữ liệu 
/*
1, boolean
2, string
3, number
*/
var arrayTest = [1,4,undefined,null, 0, 'Tuan', NaN];

var mapTest = arrayTest.map(function(test) {
    return Boolean(test); //String(test), Number(test)
});
console.log(mapTest);

var productInfo = [
    {
        id: 1,
        name: 'Osi',
        coin: 5
    },
    {
        id: 2,
        name: 'Choco Pie',
        coin: 10
    },
    {
        id: 3,
        name: 'Coca',
        coin:20
    },
];
var product = productInfo.map(function(a){
    return {
        id: a.id,
        name: a.name,
        price: a.coin,
        rate: '5 start'
    }
})
console.log(product)