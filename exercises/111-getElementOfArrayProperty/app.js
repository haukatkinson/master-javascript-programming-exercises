let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    return obj[key][index]
}
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output);