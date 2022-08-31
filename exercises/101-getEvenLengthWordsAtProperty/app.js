let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
  return obj[key].filter(function(item){
    return Array.isArray(obj[key]) && item.length%2==0
  })
  return []
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']