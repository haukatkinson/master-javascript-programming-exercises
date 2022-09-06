function getLongestElement(arr) {
    let bigEle = arr.sort(function(a, b){
       return b.length - a.length
    })
    return bigEle[0]
    
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'