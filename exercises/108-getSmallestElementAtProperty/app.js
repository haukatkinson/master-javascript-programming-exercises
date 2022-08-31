let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
  var space = obj[key].sort(function(a , b){
    return a - b
})
return space[0]
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1