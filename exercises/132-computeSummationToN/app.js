function computeSummationToN(n) {
    let sum = 0
    for(var i = n; i > 0; i--){
        sum = sum + i
    }
    return sum
}

let output = computeSummationToN(6);
console.log(output); // --> 21