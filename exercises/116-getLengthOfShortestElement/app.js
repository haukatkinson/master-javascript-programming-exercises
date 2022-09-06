function getLengthOfShortestElement(arr) {
    let space = arr.sort(function(a, b){
        a.length - b.length
    })
    return space[0]
    
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3