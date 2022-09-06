function findShortestElement(arr) {
    let shortEl = arr.sort(function(a,b){
        return a.length - b.length
    })
    return shortEl[0]

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'