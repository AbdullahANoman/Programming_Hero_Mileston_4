/* This Function a positive number multipied by 3 then multipied number summation with 10 
then summation number divide by 2 then divisionNumber number substracted  by 5 
then return the substraction Number */

function mindGame (number){
    if(typeof number !== 'number')
    {
        return "Please Enter a Number";
    }
    let inputNumber = Math.abs(number);
    let multiplicationNumber = inputNumber*3;
    let summationNumber = multiplicationNumber +10;
    let divisionNumber = summationNumber/2;
    let subtractionNumber = divisionNumber-5;
    return subtractionNumber;
}
var result = mindGame(5);
console.log(result);