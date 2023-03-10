
function sum_all(number){
    let sum=0;
    for(var i=0; i<number.length; i++)
    {
        var element = number[i];
        sum+=element;
    }
    return sum;
}
// function sum_even_all(numbers){
//     let sum=0;
//     for(var i=0; i<numbers.length; i++)
//     {
//         var element= numbers[i];
//         if(element%2==0)
//         {
//             sum+=element;
//         }
//     }
//     return sum;
// }
// function sum_odd_all(numbers){
//     var odd_numbers= [];
//     for(var i=0; i<numbers.length; i++)
//     {
//         var element= numbers[i];
//         odd_numbers.push(element);
//     }
//     return odd_numbers;
// }
function even_numbers (number)
{
    let even = [];
    for(var i=0; i<number.length; i++)
    {
        var element= number[i];
        if(element%2==0)
        {
            even.push(element);
        }
    }
    return even;
}
function odd_numbers (number)
{
    let odd = [];
    for(var i=0; i<number.length; i++)
    {
        var element= number[i];
        if(element%2 != 0 )
        {
            odd.push(element);
        }
    }
    return odd;
}
var numbers = [100,34,45,47,48,95,86];
var all_numbers_sum = sum_all(numbers);
console.log(all_numbers_sum);

var even_all_numbers = even_numbers(numbers);
var even_all_numbers_sum= sum_all(even_all_numbers);
console.log(even_all_numbers_sum);

var odd_all_numbers = odd_numbers(numbers);
var odd_all_numbers_sum = sum_all(odd_all_numbers);
console.log(odd_all_numbers_sum);



// var even_numbers_sum = sum_even_all(numbers);
// console.log(even_numbers_sum)
// var odd_numbers_sum = sum_odd_all(numbers);
// console.log(odd_numbers_sum);


