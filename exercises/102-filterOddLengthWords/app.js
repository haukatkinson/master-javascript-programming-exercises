function filterOddLengthWords(words) {
    var idk = words.filter(function(x){
        if(x.length%2!=0){
            return x
        }
    })
    return idk
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']