function getElementsThatEqual10AtProperty(obj, keys){
    return obj[keys].filter(function(item){
        return item === 10
    })
    }
let obj = {
    key: [1000, 10, 50, 10]
  };
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);

