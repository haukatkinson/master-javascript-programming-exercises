function computeProductOfAllElements(arr) {
  let sum = 1
  for(var i = 0; i <arr.length; i++){
    sum = sum * arr[i]
  }
  return sum
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

