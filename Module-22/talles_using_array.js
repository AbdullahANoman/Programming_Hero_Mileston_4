function inMax(array){
    var largest = array[0];
    for(var i=0; i<array.length; i++)
    {
        var element = array[i];
        if(element>largest)
        {
            largest= element;
        }
    }
    return largest;
}

const height = [100,200,300,250,347];
var result = inMax(height);

console.log(result);