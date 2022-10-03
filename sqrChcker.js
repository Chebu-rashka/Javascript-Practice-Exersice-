// Write a function that checks whether the parameter is a square number

// squareChecker(25) → true
// squareChecker(39) → false


function sqrChecker(number) {
       if (number>0 &&Math.sqrt(number)%1===0) {
                true
         console.log(number + " is true")
        } else 
        console.log(number + " is false")
        
        
}
sqrChecker(39)

