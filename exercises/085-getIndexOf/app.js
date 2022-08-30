function getIndexOf(character , string){
    for(var i = 0; i < string.length; i++){
        if(character === string[i]){
            return string.indexOf(string[i])
        }
    }
    return -1
}
let output = getIndexOf('a', 'I am a hacker');
console.log(output);
