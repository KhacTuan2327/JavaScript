function displayResult(some) {
    document.getElementById('demo').innerHTML = some;
}
function mySum(num1, num2, callback) {
    let sum = num1+num2;
    callback(sum);
}

mySum(5,5, displayResult);