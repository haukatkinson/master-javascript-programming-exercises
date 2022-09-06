function listAllValues(obj) {
  let arr = []
  arr = Object.values(obj)
  return arr
}
let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output);