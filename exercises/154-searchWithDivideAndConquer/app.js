function search(array, value) {
  for(var i = 0; i < array.length; i++){
    if(array[i] == value){
      return i
    } 
  }
  return null
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 34)); // => 4