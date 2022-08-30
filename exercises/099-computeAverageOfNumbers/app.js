function computeAverageOfNumbers(arr){
    var sum = arr.reduce(function(a , b){
        return a + b
    })
    return sum/arr.length
}
let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output);
