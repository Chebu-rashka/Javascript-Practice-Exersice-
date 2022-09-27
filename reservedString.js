// Write a function that takes a string as a parameter and returns its reversed version
//    Hello -> olleH
//    Bootcamp -> pmactooB
//    Xадгалагдах -> xадгалагдах

function reservedString(str) {
    let testword=""
    for(let i=str.length-1; i>=0;i--){
        testword+=str[i]
    }
    return testword;
    
}

console.log(reservedString("Xадгалагдах "))
//
function reservedString1(string){
    // const strArr=string.split("");
    // const reverseStrArray=strArr.reserve();
    // const reserveString=reverseStrArray.join("");
    // return reserveString
    return str.split("").reserve().join(""); ///Chain method
}
console.log(reservedString("hello"));



///str.split=>converting to array