function isLeapYear(year){
    var result = year%4;
    if(result==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var LeapYear = isLeapYear(2020);

console.log("The Year is leapYear"  ,LeapYear )