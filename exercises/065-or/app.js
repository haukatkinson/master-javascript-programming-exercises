function or(expression1, expression2) {
  if(expression1 || expression2 == true){
    return true
  } else {
    return false
  }
}
let output = or(true, false);
console.log(output); 