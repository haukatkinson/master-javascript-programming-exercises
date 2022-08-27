function isEitherEvenAndLessThan9(num1, num2) {
    if(num1 > 8 || num2 > 9){
        return false
    }
    if(num1 || num2 %2==0){
        return true
    } else  {
        return false
    }
}
let output = isEitherEvenAndLessThan9(3, 3);
console.log(output);