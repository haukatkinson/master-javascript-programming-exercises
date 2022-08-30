function getNthElementOfProperty(obj, key, n){
    return obj[key][n]
}
let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output);