function getElementsLessThan100AtProperty(obj, key){
    return obj[key].filter(function(item){
        return item < 100
    })
}
let obj = {
    key: [100, 101, 200]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output);
