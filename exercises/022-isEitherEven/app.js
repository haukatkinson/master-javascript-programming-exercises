function isEitherEven(num1, num2){
    if(num1%3!=0 && num2%2==0){
        return true
    } else {
        return false
    }
}
let output = isEitherEven(1, 4);
console.log(output);