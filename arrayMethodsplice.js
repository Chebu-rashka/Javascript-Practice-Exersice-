// ● Write a function that removes the following values from an array
// ○ 0
// ○ undefined
// ○ null
// ○ ‘’
// ○ false
// ○ NaN
// Example: [29, null, ‘test’, ‘value’, ‘’, NaN, 75, undefined, false]
// Should give: [29, ‘test’, ‘value’, 75]

const  arr1=[29, "null", "test","value",'',"Nan",75,"undefined", "false"];
arr1.splice(1,1) && arr1.splice(3,2) && arr1.splice(4,2);
console.log(arr1);

//////
const  arr2=["hey", "hi", "test","testing"];
arr2.splice(2,1)      //2 indexees ehleed 1 element ustga gesn ug
console.log(arr2)
