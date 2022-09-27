// Write a function that finds the sum of positive numbers in an array
//    positiveSum([1, 2, 3.1, 4, 5]) → 15.1
//    positiveSum([-2, 3.2, 4, 1, -5, -2, 83]) -> 91.2
function sumofPositive(number){
    
    let sum=0
    for(let i=0;i<number.length;i++) {
        if(number[i]>0) {
            sum=sum+number[i]
        }

    }
            console.log(sum)
            
}
sumofPositive([-2, 3.2, 4, 1, -5, -2, 83])


