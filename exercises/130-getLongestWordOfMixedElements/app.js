function getLongestWordOfMixedElements(arr) {
    let long = 0
    let word = ''

    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'string' && arr[i].length > long){
            word = arr[i];
            long = arr[i].length
        }
    }
    return word
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'