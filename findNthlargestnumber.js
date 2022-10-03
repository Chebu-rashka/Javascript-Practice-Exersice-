// Write a function that finds the nth (parameter)
//  largest number from the array
const array = [203, 201, 402, 4891, 20, -2, ];
const n = array.length;
 largestNth=(array, n)=>{
    array.sort()
    return Math.max(array[n]);
}
    console.log(largestNth(array,3));
  
 