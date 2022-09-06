function findSmallestElement(arr) {
    let smallEl = arr.sort(function(a, b){
        return a - b
    })
    return smallEl[0]

}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1