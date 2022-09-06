let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    
    return obj[key].reduce(function(a,b){
        return a + b
    })
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13