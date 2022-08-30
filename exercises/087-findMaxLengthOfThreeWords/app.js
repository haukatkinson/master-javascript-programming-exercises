function findMaxLengthOfThreeWords(word1, word2, word3){
    let minWord = word1.length
    if(minWord < word2.length){
        minWord = word2.length
    } 
    if(minWord < word3.length){
        minWord = word3.length
    }

    return minWord
}
let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);