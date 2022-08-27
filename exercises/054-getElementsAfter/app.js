function getElementsAfter(array, n) {
  return array.slice(array.length -n)
}
let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output);