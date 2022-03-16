//Định nghĩa lại các method của array để hiểu rõ hơn về callBack
//forEach, find, filter, some, every, reduce, map

let programmingLanguage = ['C++', 'Java', 'JavaScript', 'C#', 'HTML/CSS', 'SQL'];

// for-in: vòng lặp là vòng lặp chỉ lặp qua những phần tử thực sự tồn tại trong mảng(có chứa giá trị),
// những phần tử mang giá trị undefine thì không duyệt
//EX: độ dài của mảng trên là 6 thì chỉ duyệt 6 lần dù cho cài độ dài mảng là 10
programmingLanguage.length = 10;
for(let index in programmingLanguage){
    console.log(programmingLanguage[index]);
}

//1, forEach: 
Array.prototype.forEach2 = function(callback){

}

programmingLanguage.forEach(function(language){
    console.log(language)
})