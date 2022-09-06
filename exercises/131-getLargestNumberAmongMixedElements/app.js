function getLargestNumberAmongMixedElements(arr) {
    let long = 0

    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number' && arr[i] > long){
            long = arr[i]
        }
    }
    return long
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5