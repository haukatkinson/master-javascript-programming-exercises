function isOldEnoughToDrink(age){
    if(age > 21){
        return true
    } else {
        return false
    }
}
let output = isOldEnoughToDrink(21);
console.log(output)