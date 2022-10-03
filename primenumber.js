// Prime number is a whole number that is only divisible
//  by itself and 1. The smallest prime number is 2.

function isPrimeNumber(n) {
    if(n===1)
    return `${n} is not a prime number`

    for (let i=2; i < n; i++) {
       
        if ( n % i === 0 ) {
        
            return `${n} is a not prime number`
        }
    }
    return`${n} is a prime number`
}   for (let index=2;index<=100; index++) {
    if(isPrimeNumber(index)=== true) 
    console.log(index+ "is a Prime number") }
