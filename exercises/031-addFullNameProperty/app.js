function addFullNameProperty(obj) {
  person = person.firstName + person.lastName
  return person
}
let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName);