function getLastElementOfProperty(obj, key){
    return obj[key].slice(-1)
}
let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output);