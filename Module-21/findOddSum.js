function findOddSum(a){
    var sum=0;
    for(var i=0; i<a.length; i++)
    {
       
        if(a[i]%2!=0)
        {
            var sum=sum+a[i];
        }
        
       
    }
    return sum;
}

var array = [5,7,8,10,45,30];

var toresult = findOddSum(array);
console.log(toresult);