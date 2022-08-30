function addToFrontOfNew(arr, element) {
    let shift = arr.slice()
    shift.unshift(element)
    return shift
    
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]