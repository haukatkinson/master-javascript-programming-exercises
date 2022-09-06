function getAllKeys(obj) {
  let collection = []
  for(var key in obj){
    collection.push(key)
  }
  return collection
}
let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); 