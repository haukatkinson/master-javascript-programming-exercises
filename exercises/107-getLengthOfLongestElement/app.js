function getLengthOfLongestElement(arr) {
    var space = arr.sort(function(a , b){
        return b.length - a.length
    })
    return space[0].length
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5