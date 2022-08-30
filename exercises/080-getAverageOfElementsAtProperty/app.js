let obj = {
    key: [1, 2, 3]
  };
function getAverageOfElementsAtProperty(obj, key){
    const initialValue = 0;
    if (Array.isArray(obj[key]) === false || (obj.hasOwnProperty(key) === false) || ( obj[key].length === 0 )){
        return 0;
      }
    const sumWithInitial = obj[key].reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    var result = sumWithInitial/obj[key].length
    return result
}
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);
