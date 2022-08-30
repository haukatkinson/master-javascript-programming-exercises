function countAllCharacters(string){
    let result = {}
    Array.from(string).forEach(el => {
        result[el] = result[el] ? result[el] + 1 : 1 
    });
    return result
}
let output = countAllCharacters('banana');
console.log(output);
