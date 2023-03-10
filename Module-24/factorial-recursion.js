function factorial(number)
{
    if(number == 1){
        return 1;
    }
    return number * factorial(number-1);
}

const result = factorial(5);
console.log(result);

let sum=1;
for(let i=1; i<=5; i++)
{
    sum*=i;
}
console.log(sum);