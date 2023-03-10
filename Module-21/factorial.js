var numbers =5;

function factorial(number){
    let result =1;
    for (var i=number; i>=1; i--)
    {
        result*=i;
    }
    return result;
}

var resultFactorial = factorial(5);

console.log(resultFactorial);


Const