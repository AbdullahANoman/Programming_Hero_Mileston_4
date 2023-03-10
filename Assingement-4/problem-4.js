/*This function a array have negative number or positive how much
number negative shows that number as return*/

function findingBadData(array)
{
   if(Array.isArray(array) !== true)
   {
    return "Please Enter A Array";
   }
   const badData = [];
   for(let i=0; i<array.length; i++)
   {
    let element = array[i];
    
    if(element<0)
    {
        badData.push(element);
    }
   }
   let badDataSize = badData.length;
   return badDataSize;
}


const allData =   [ 2, -5, -7, -13 ];
var result = findingBadData(allData);
console.log(result);
