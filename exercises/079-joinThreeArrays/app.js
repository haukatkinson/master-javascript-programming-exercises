function joinThreeArrays(arr1, arr2, arr3) {
  let newArr1 = arr1
  let newArr2 = arr2
  let newArr3 = arr3
  let result =  newArr1.concat(newArr2, newArr3);
  return result
  
}
let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output);