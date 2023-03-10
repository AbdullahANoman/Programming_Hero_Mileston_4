var jim=36;
var dela= 45;
var chinku =42;

function maximum_number (a,b,c)
{
    if(a>b && a>c)
    {
        return console.log("Jim get Cake");
    }
    else if(b>a && b>c)
    {
        return ("Dela get Cake");
    }
    else{
        return console.log("Chinku Get cake ");
    }
}

var result = maximum_number(jim ,dela ,chinku);

console.log(result);