const person = {};
const value = prompt("Vad är ditt förnamn");
const value2 = prompt("Vad är ditt efternamn");
const value3 = prompt("Vad är din ålder");

person.firstName = value;
person.lastName = value2;
person.age = value3;

addPerson(person);

//console.log(person);

function addPerson(newPerson) {
  console.log(newPerson);
}
