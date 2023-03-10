/*This function a number substract by 7 then if the number less than 7 then 
shows the substraction number or if the number equal to 7 or more then shows the input
number double */

function isLGSeven(number)
{
    if(typeof number !== 'number')
    {
        return "Please Enter A Number ";
    }
    let subtractionNumber = number-7;
    if(subtractionNumber<7)
    {
        return subtractionNumber;
    }
    else{
        return number*2;
    }
}
var result = isLGSeven(15);
console.log(result);