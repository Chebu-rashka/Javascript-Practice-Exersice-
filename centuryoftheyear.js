// Write a function that finds the century of the year
// Every century spans from year 1 to 100
// 1 - 100 → century 1
// 101 - 200 → century 2
// 201 - 300 → century 3
// 1501 - 1600 → century 16

function century(number){
    return number/100
    }
    console.log(Math.ceil(century(1501)))