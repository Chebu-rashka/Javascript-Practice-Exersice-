// Write a function that takes one parameter
// ● It should remove the matching value of parameter from the array
// Example: parameter = ‘test’
// [‘hey’, ‘hi’, ‘test’, ‘testing’] -> [‘hey’, ‘hi’, ‘testing’]

const  a=["hey", "hi", "test","testing"];
a.splice(2,1) //2 indexees ehleed 1 element ustga gesn ug

console.log(a);


// var array=['1','2','3','4','5','6']
// var newArray = array.filter((value)=>value!='3');
// console.log(newArray);