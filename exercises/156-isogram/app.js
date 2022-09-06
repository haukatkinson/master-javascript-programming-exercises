function isIsogram(text) {
  var i, j;
  text = text.toLowerCase();
  for(i = 0; i < text.length; ++i) {
    for(j = i + 1; j < text.length; ++j) {
      if(text[i] === text[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false
