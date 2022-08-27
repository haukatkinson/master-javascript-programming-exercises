function isPersonOldEnoughToDrinkAndDrive(person) {
  if(person.age < 21){
    return false
  } else {
    return true
  }
}
let person = {
  age: 4
}
let output = isPersonOldEnoughToDrinkAndDrive(person);
console.log(output);