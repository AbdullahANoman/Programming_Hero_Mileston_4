/* This Function a positive number multipied by 3 then summation with 10
then divide by 2 then substract with 5 then return the value*/

function mindGame(number){
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


/* This function a string length number is even or odd shows */

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

/*This function a number substract by 7 then if the number less than 7 
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

/*This function have three friend gems and different gems power and  friend gems 
with multipied their gems and then summation their total gems and return the value 
if the value greater than 2000 then substract with 2000 and return the value */

function  gemsToDiamond(firstFriend,secondFriend,thirdFriend)
{
    if(typeof firstFriend != 'number' || typeof secondFriend != 'number' || typeof thirdFriend != 'number')
    {
        return "Enter Number Please" ;
    }

    let totalDiamond = firstFriend*21+secondFriend*32+thirdFriend*43;
    if(totalDiamond>1000*2)
    {
        let finalDiamond = totalDiamond-2000;
        return finalDiamond;
    }
    return totalDiamond;
}

