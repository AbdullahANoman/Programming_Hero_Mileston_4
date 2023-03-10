var first100Rate = 100;
var second100Rate = 90;
var third100Rate = 70;

function ticketPrice (number){
    if(number<=100)
    {
        var resultFor100 = number*first100Rate;
        return resultFor100;
    }
    else if(number<=200)
    {
        var value = number -100;
        var resultFor200 = value*second100Rate + 100*first100Rate;
        return resultFor200;
    }
}

var finalResult = ticketPrice(101);
console.log(finalResult);