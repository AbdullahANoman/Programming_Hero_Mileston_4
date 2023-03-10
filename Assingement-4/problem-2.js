/* This function a string length is even or odd shows */

function evenOdd(string)
{
    if(typeof string !=='string')
    {
        return "Please Enter A String";
    }
    let stringSize = string.length;
    if(stringSize%2==0)
    {
        return "even";
    }
    else
    {
        return "odd";
    }
}
var result = evenOdd("jack ma");
console.log(result);