let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    return obj[key].slice(0,-1)

}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]