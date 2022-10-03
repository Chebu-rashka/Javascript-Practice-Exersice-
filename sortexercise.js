// const alphabets =[
//     {letter: "a", index:1},
//     {letter:"m", index:13},
//     {letter: "e", index:5},
//     {letter:"s", index:19},
//     {letter:"z",index:26},
//     {letter:"t", index:20},
//     {letter:"o",index:15},
//     {letter:"h",index:8},
// ]
// const sortA=alphabets.sort((letter,index)=>{
//     console.log(letter,index)
//     if(index) return 1
//     else return -1
// })
const alphabets =[
    {letter: "a", index:1},
    {letter:"m", index:13},
    {letter: "e", index:5},
    {letter:"s", index:19},
    {letter:"z",index:26},
    {letter:"t", index:20},
    {letter:"o",index:15},
    {letter:"h",index:8},
];
// const sortA=(arr)=>{
//     console.log(arr)
// }
// sortA(alphabets)

const sortA=(arr)=>{
    const sorted = arr.sort((obt1,obt2)=>{
        if(obt1.index<obt2.index)
        return 1                  
        else return -1
        // console.log("obt1",obt1)
        // console.log("obt2",obt2)
        // console.log('---')
    })
    console.log(sorted)
}
sortA(alphabets)

//usgeer n sortlohiin tuld index-iin orond letteree tavina


