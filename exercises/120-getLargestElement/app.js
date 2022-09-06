function getLargestElement(arr) {
  let largeEl = arr.sort(function(a, b){
    return b - a
  })
  return largeEl[0]
  
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;