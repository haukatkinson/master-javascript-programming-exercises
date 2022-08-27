function computeAverageLengthOfWords(word1, word2){
    let value = word1.length + word2.length
    return value / 2
}
let output = computeAverageLengthOfWords('code', 'programs');
console.log(output);