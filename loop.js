let counter = 1
while(counter<15) {
    console.log(counter)
    counter++
} //

for(let i=10; i<20; i++) {
    if(i%2===1) {
        console.log(i)
    }
}//

for(let num=100; num<120; num++) {
    if(num%2===0) {
        console.log(num)
    }
} //
let sum=0
for (let i2=2;i2<=10;i2++){
    sum=sum+i2
}
console.log(sum)

let sum1=0
for (let i3=11;i3<=20;i3+=2) {
    console.log(i3);
    sum1=sum1+i3

}//

const myNumbers = [-2, 20, 4, 5, -59, -2, 3, -3, 102]
let index=0
while (index<myNumbers.length) {
    if (myNumbers[index]<0)
    console.log(myNumbers[index])
    index++
} 

//randomFunction(10) (21) (3)


const myNumbers1 = [-2, 20, 4, 5, -59, -2, 3, -3, 102] // Array uusgehde const arrayName=[]
let index1=0                                           // Logical error zaaj magad uchir,0-eesehlene gd declare hiine
while (index1<myNumbers1.length) {                     // while n  ehelj nuhtsuluu shalgadg davtalt urchraas 0<myNumbers1.lenght true uchir tsaasha ybna
  
    
    if (myNumbers1[index1]<0)                         //hervee array=d bga utga<0 buyu surug utgatai bol
    console.log(myNumbers1[index1])                   // print hiihdee array-d bga utgaas 0indexees ehleed unshin
    index1++                                         // Beware of an “Infinite Loop” 
}


  // myNumbers[index] geheer 
    // myNumbers array giin index-deh utgiig ni unshina gsn ug
    // index ni bolohoor 0 -oos ehleed nemegdeed yvj bga te
    // tgheer ehleed myNumbers iin 0 doh item iig unshina -> ter ni  -2 gsn utga ugnu
    // daraa ni myNumbers iin 1 deh item iig unshina -> ter ni 20 gsn utga ugnu
    // gh metchilen