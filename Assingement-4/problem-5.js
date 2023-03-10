/*This function have three friend gems , first friend gems power 21 second friend gems power 
32 third friend gems power 43 . Input their gems and multipied with gems power 
and three friend total gems count . If total gems greater than 2000  then substract by
2000  than return the substract value or if less than 2000 then return the total value*/

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

var result = gemsToDiamond (100, 5, 1);
console.log(result);