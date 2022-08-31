function squareElements(arr) {
return arr.map(function(item){
  return Math.pow(item, 2)
})
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]