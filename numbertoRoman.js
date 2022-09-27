// Write a function that converts a decimal to roman number (between 1 and 100)
// Equivalences 
// [1,   4,     5,     9,   10,    40,    50,    90,    100]
// [I,   IV,   V,   IX,   X,    XL,    L,    XC,     C ]
//    convertToRoman(22) → XXII
//    convertToRoman(39) → XXXIX


function toRoman(number){
    let converting=new Map();
    converting.set("I",1);
    converting.set("V",5);
    converting.set("X",10);
    converting.set("L",50);
    converting.set("C",100);
    converting.set("D",500);
    converting.set("M",1000);




let too=0
    for(let char of number){
        too+=converting.get(char);
        return too
    }
    console.Log(too)
}

toRoman("22")