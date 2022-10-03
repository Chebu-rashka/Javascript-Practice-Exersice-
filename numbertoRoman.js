// Write a function that converts a decimal to roman number (between 1 and 100)
// Equivalences 
// [1,   4,     5,     9,   10,    40,    50,    90,    100]
// [I,   IV,   V,   IX,   X,    XL,    L,    XC,     C ]
//    convertToRoman(22) → XXII
//    convertToRoman(39) → XXXIX
const romanCon={
    1:"I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C"

}
const toRoman = (num)=>{
   console.log(num)
    if(typeof num!=='number'){
        console.log(`${num} is not`)
        return
    }
if(num<=0){
    console.log("given number us not positive")
    return
}

let romanNumber=''
Object.entries(romanCon).reverse().forEach(([int,rom])=> {
int = parseInt(int)
console.log(int,rom)
while(num>= int) {
    romanNumber+= rom
    num-=int
}
})

console.log(romanNumber)
}

toRoman(22)

//22 n 10aas ih bgagga shalgaad 
//12oos ih bnuu shalgan
//2oos ih uu ugui yu
//1-ees ih bnu ugui bnuu shalgaad unen bvl i nemeed undsen toonoos hasna