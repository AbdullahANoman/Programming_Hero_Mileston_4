var myComputer ={
    Monitor : "View_Sonic" ,
    processor : "Amd_Ryzen_5660g",
    price: "70000tk" ,
    ram : "8gb"
}


var keys = Object.keys(myComputer);
console.log(keys);

// for(var i=0; i<keys.length; i++)
// {
//     var propertiesValue = myComputer[keys[i]];
//     console.log(keys[i] , propertiesValue);
// }

for(var i=0; i<keys.length; i++)
{
    var propertyName = keys[i];
    var propertyValue = myComputer[propertyName];
    console.log(propertyName , propertyValue);
}