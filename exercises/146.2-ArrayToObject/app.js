function fromListToObject(array) {
  let myObj = {}
    array.forEach(function() {
    myObj(array[0]) = myObj(array[1])
  });
  return myObj
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(ouput) // => { make: 'Ford', model: 'Mustang', year: 1964 }