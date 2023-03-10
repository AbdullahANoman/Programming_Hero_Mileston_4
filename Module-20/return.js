function add (number1,number2)
{
    // console.log("The number -1 :" , number1 );
    // console.log("The number-2 :",number2);

    var sum= number1+number2;
    // console.log("The Sum is : ", sum);
    return sum;
}


var total = add(100,200);

// console.log("The total  is : ",total);

function bringSingara(money)
{
    var singaraPrice = 10;
    var quantity=4;

    var totalCost = singaraPrice*quantity;

    console.log("Total Cost : ", totalCost);

    var backMoney = money - totalCost;
    return backMoney;
}

var return_money = bringSingara(100);

console.log("Return Money : " , return_money);