function isEvenWithoutModulo(num) {
    if((num / 2) * 2 == num){
        return true
    } else {
        return false
    }
}
let output = isEvenWithoutModulo(8);
console.log(output); // --> true