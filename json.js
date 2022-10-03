const person = {name: "John", occupation: "Radio Host" };
const myJson = JSON.stringify(person);
console.log(myJson, typeof myJson)
console.log(JSON.parse(myJson), typeof JSON.parse(myJson))