function transformFirstAndLast(array) {
  let myObj = {}
  array.forEach(function(){
    myObj(array[0]) = myObj(array.length-1)
  });
  return myObj
}
let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output);