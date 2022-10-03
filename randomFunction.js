// const randomArray=(num1, num2,num3) => { num1 => num2=>num3
// console.log(randomArray(num1*num2*num3)) 
// }
// randomArray(5)(8)(3)

function randomFunction(num1){
    return(num2)=>{
        return(num3) =>{
            return num1*num2*num3
        }
    }
}
console.log(randomFunction(5)(8)(3))