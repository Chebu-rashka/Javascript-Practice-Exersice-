const findUnion = (array1, array2) => {
    // console.log(array1, array2)
    const union=[]
    array1.map((num) => {
        if(!union.filter(num))
        union.push(num)
    })
    array2.map((num)=>{
        if(!union.filter(num))
        union.push(num)
    })
    return union

}
console.log(findUnion([1,2,3,4],[1,4,5]))

