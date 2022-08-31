let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    return obj[key].map(element => {
      return Math.pow(element, 2)
    });
}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]