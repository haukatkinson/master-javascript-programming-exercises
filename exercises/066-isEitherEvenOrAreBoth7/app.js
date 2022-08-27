function isEitherEvenOrAreBoth7(num1, num2) {
    let multiNum = num1 * num2
    if(multiNum%2==0 || num1 === 7 && num2 === 7){
        return true
    } else {
        return false
    }  
}
let output = isEitherEvenOrAreBoth7(3, 7);
console.log(output);
