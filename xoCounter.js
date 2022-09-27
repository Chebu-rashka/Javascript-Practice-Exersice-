// Write a function that checks if the string has equal amount of X and O in it.
//    xoXo → true
//    xoXoOXoo → false
//    oxOxXoXo → true
function xoCOunter(string) {
    sum=0
    let stringLow = string.toLowerCase()

    for (let i=0; i<stringLow.length;i++) {
        if(stringLow[i]==="x") {
            sum++ 
           
        } else if(stringLow[i]==="o") {
            sum--
            
        }
        // console.log(sum)
}
            return !sum // sum bhgui 0
        }
        
console.log(xoCOunter("xoxXoO"))


// for loopeer index-iin urtiig ybulaad jijig useg yvuulaad
//toolson n x-tei tentsuu bol nemgdeed
//herve 0-tei tentsuu bol hsagdaad ybana
//yu ch uldku bol gargaad irne
//
//argument n collectionls of item bol for and while loop ahisglan