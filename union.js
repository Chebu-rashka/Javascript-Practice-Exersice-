const arr1 = new Array(0,1,2,0);
const arr2= new Array(1,2,3,4);
const union = unique(arr1.concat(arr2));

function unique(arrayName)
{
  let newArray=new Array();
   for(let i=0; i<arrayName.length;i++ )
  {  
    for(let j=0; j<newArray.length;j++ )
    {
      if(newArray[j]==arrayName[i]) 
        continue ;
    }
    newArray[newArray.length] = arrayName[i];
  }
  return newArray;
}


console.log(union);