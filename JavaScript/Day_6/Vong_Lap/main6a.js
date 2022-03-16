//vòng lặp for/ in loop

var myInfo = {
    fullName: 'Trinh Khac Tuan',
    age: 20,
    address: 'Thanh Hoa',
    email: 'khactuan2327@gmail.com'
};

for(var key in myInfo)// có bao nhiêu key thì sẽ chạy bấy nhiêu lần (4)
{
    console.log(key);  
}

var language = 'Javascript';
for(var key in language)
{
    console.log(language[key]);// in ra từng chữ cái của chuỗi
}

var language = [
    'Vietnamese',
    'English',
    'French',
]
for(var key of language)
{
    console.log(key);
}