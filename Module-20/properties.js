var myComputer ={
    Monitor : "View_Sonic" ,
    processor : "Amd_Ryzen_5660g",
    price: "70000tk" ,
    ram : "8gb"
}

console.log(myComputer.Monitor);
// alternative_way 
console.log(myComputer["Monitor"]);

// keys of object 

var propertiesOfObject  = Object.keys(myComputer);

console.log(propertiesOfObject);

var valuesOfObject = Object.values(myComputer);
console.log(valuesOfObject);


var propertiesName = 'processor';
var propertiesValues = myComputer[propertiesName];

console.log(propertiesName,propertiesValues);


// setProperty Values system 
myComputer.price = "100000tk";
console.log(myComputer);
myComputer["price"]= "50000tk";
console.log(myComputer);
var computer_price = "price";
myComputer[computer_price]= "400000tk";
console.log(myComputer);