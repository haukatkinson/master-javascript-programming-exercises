function select(arr, obj){
    let hash = {}
    arr.forEach(v => Object.keys(obj).some(c => v == c ? hash[v] = obj[c] : null));
    return hash
}
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output);