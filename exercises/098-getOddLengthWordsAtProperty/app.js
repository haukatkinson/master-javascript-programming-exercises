function getOddLengthWordsAtProperty(obj , key){
    return obj[key].filter(function(item){
        return item.length%2!=0 
    })
}
let obj = {
    key: ['It', 'has', 'some', 'words']
  };
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);