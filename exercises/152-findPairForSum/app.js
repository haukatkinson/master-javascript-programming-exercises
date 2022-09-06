function findPairForSum(array, number){
    let both = []
    for (var i = 0; i < array.length - 1; i++)
    {
        // start from the i'th element until the last element
        for (var j = i + 1; j < array.length; j++)
        {
            // if the desired sum is found, print it
            if (array[i] + array[j] == number){
                both.push(array[i])
                both.push(array[j])
            } 
}
    }
    return both
}
let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]