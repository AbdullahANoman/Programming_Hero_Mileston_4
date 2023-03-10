var jim=36;
var dela= 45;
var chinku =42;


function maximum_number(a,b,c)
{
    var result1= Math.max(a,b,c);
    if(result1==a){
        return ("Jim get Cake");
    }
    else if(result1==b)
    {
        return ("Dela get Cake");
    }
    else if(result1==c)
    {
        return ("Chinku get Cake");
    }
}

var result = maximum_number(jim ,dela ,chinku);

console.log(result);
