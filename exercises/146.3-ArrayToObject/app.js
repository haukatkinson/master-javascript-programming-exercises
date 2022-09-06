function transformEmployeeData(array) {
  var collection = []
  for(var i = 0; i < array.length; i++){
    let obj = {}
    var dataArray = array[i]
    for(var j = 0; j < array[i].length; j++){
      obj[dataArray[j][0]] = dataArray[j][1]
    }
    collection.push(obj)
  }
  return collection
}
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output);