function multiplyBetween(num1, num2) {
    let sum = 1
    for(var i = num1; i < num2; i++){
        sum = sum * i
    }
    return sum
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24