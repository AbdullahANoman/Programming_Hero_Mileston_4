var array = [100,200,300,400];

function avg (a){
    let sum=0;
    for(var i=0; i<a.length; i++)
    {
        var index= i;
        sum+=a[index];
    }
    var avg = sum/a.length;
    return avg;
}
var result = avg(array);
console.log(result);