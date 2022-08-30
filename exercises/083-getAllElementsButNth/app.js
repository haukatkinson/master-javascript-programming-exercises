function getAllElementsButNth(array, n) {
   let result = []
   for(var i = 0; i < array.length; i++){
    if(i === n){
        continue
    } 
    result.push(array[i])
   }
   return result


}
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']