function woodCalculator(c,t,b)
{
    var totalChair = 3*c;
    var totalTable = 10*t;
    var totalBed = 50*b;
    var sum = totalBed+totalChair+totalTable;
    return sum;
}

var chairNeed = 10;
var tableNeed = 5;
var bedNeed = 3;
var result = woodCalculator(chairNeed,tableNeed,bedNeed);
console.log(result);