function isRotated(str1, str2) {
   for(var i = 0; i < str1.length; i++){
    for(var j = 0; j < str2.length; j++){
        if(str1.length == str2.length){
            return true
        } else {
            return false
        }
    }
   }
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false