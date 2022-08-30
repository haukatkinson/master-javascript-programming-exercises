function removeElement(arr, n){
    return arr.filter(function(item){
        return item != n
    })
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); 