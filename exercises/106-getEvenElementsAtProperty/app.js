
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    return obj[key].filter(function(item){
      return Array.isArray(obj[key]) && item%2==0
    })
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]