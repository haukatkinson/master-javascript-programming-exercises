function addToBackOfNew(arr, element) {
    let shift = arr.slice()
    shift.push(element)
    return shift
    
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]