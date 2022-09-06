function findShortestOfThreeWords(word1, word2, word3) {
    let biggest = word1
    if(biggest > word2.length){
        biggest = word2
    }
    if(biggest > word3.length){
        biggest = word3
    }
    return biggest
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'