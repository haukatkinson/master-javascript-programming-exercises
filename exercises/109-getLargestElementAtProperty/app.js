let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
  var space = obj[key].sort(function(a , b){
    return b - a
})
return space[0]
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4