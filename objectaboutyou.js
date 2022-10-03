const person={}

person.firstName="Zoe"
person.lastName="John"
person.occupation= "Manager"
person.hobby= "Kayaking"
delete person.occupation

console.log(person)
console.log(typeof person)
// { firstName: 'Zoe', lastName: 'John', hobby: 'Kayaking' }
// object
