// Write a function that takes a number as a parameter
// Console log the sum of all the numbers that are divisible by 4 5 up until the parameter value.
// Return 0 if the parameter value is negative
// Example: if the parameter is 11
// It should find the sum of 4, 5, 8, 10  —> 27
// 4, 5, 8, 10 are the numbers that are divisible by 4 and 5
// You may use for or while loop

function sumofMultiple(number){

    let sum=0
        for(let index=0;index<=number;index++) {
            if (index%4===0 || index%5===0) {
                console.log(index)
                sum=sum+index
            
        }
    }
        console.log('-----')
        console.log(sum)
    }
    sumofMultiple(10)
    
    