function getAverageOfElementsAtProperty(obj, key) {
  var sum = obj[key].reduce(function(a, b){
    return a + b
  })
  return sum/obj[key].length
}
let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);