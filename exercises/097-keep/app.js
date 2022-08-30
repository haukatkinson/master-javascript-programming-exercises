function keep(obj, n){
    return obj.filter(function(item){
        return item == n
    })
}
let output = keep([1, 2, 3, 2, 1], 2)
console.log(output);