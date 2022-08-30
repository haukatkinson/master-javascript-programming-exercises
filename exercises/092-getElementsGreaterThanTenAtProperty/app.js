function getElementsGreaterThan10AtProperty(obj, key){
   return obj[key].filter(function(item){
    return item > 10
   })
}
let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output);
