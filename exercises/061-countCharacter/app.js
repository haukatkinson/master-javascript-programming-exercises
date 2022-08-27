
function countCharacter(str, char) {
    let count = 0

    for(var i = 0; i < str.length; i++){
        
        if(str.charAt(i) == char){
        count += 1
    }
 }
    return count
}
let output = countCharacter('I am a hacker', 'a');
console.log(output);
