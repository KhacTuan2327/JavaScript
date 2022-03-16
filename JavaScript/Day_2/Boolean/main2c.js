var a=2;
var b=3;
var isSuccess = a>b;
console.log(isSuccess);
/*
Có 6 giá trị khi trả về thì sẽ nhận false
1, 0
2, false
3, '' - ""
4, undefined
5, NaN;
6, null
*/
var fullName = 'Trinh Khac Tuan'
if(fullName)
{
    console.log('DIEN KIEN DUNG');
}
else
{
    console.log('DIEU KIEN SAI');
}