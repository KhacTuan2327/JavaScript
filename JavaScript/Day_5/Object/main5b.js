//Object trong javascript

// key: 'value'
var emailKey = 'email';
var myInfo = {
    name: 'Khac Tuan',
    age: '20',
    address: 'Thanh Hoa',
    phone: '0392755864',
    [emailKey]: 'khactuan2327@gmail.com',
    getName: function()
    {
        return this.name;
    }
};

console.log(myInfo);
console.log(myInfo.name);

//xóa value trong Object
delete myInfo.age;

//Object constructor
function User(firstName, lastName, avatar)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.fullName = function()
    {
        return `${this.lastName} ${this.firstName}`;
    }
}

var author = new User('Tuấn', 'Trịnh Khắc', 'Avatar');
var user = new User('Anh', 'Lê Minh', 'avatar');
console.log(author.fullName());
console.log(author);

User.prototype.age = '20';//thêm 1 thuộc tính chưa có sẵn của phương thức
console.log(user.age);

