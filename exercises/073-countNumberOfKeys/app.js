function countNumberOfKeys(obj) {
    let count = 0
  for(var key in obj){
    count = count +1
  }
  return count
}
let obj = {
    a: 5,
    b: 4,
    c: 2,
    d: 1
};
let output = countNumberOfKeys(obj);
console.log(output);