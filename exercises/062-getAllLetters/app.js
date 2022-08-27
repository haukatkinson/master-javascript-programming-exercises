function getAllLetters(str) {
    if (str === '') {               // If arguments is blank
        return [];                  // return an empty array
    }
    return str.split('');           // Else, split string using the split() method, which returns an array
}
let output = getAllLetters('Radagast');
console.log(output); 