function isPersonOldEnoughToDrink(person) {
  if(person.age >= 21){
    return true
  } else {
    return false
  }
}
let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrink(obj);
console.log(output);