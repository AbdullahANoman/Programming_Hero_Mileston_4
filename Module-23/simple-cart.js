const shop =[
    {name : "shirt", price:1000, quantity:2},
    {name :"shoe", price:3000, quantity:1},
    {name :"pant", price:2200, quantity:4},
    {name :"belt", price:600, quantity:2}
]
function sumAll (s){
    var sum=0;
    for(let i=0; i<s.length; i++)
    {
        var element = s[i];
        var productTotal = element.price * element.quantity;
        sum+=productTotal;
    }
    return sum;
}
var result = sumAll(shop);
console.log(result);
