function convertObjectToList(obj) {
  return Object.keys(obj).map(key =>
    [key, obj[key]]
    )
}
let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output);