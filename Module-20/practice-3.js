function make_avg(a)
{
    var sum=0
    for(var i=0; i<a.length; i++)
    {
        var sum=sum+a[i];
    }
    var avg = sum/a.length;
    return avg;
}


var array =[10,20,30];
var result = make_avg(array);


console.log(result);