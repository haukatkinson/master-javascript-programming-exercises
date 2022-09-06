function sumDigits(num) {
    var total = 0;
    var newString = num.toString().split('');
    for (var i = 0; i < newString.length; i ++) {
      if(newString[i]==='-') { //check to see if the first char is -
        i++; //if it is, lets move to the negative number
        var converted =  parseInt(newString[i]); // parse negative number
        total -= converted; // subtract value from total
        continue; // move to the next item in the loop
      }
      var converted = parseInt(newString[i]);
      total += converted;
    }
    return total;
}
let output = sumDigits(316);
console.log(output); // --> 4