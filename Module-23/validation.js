function add(a,b)
{
    if(typeof a !=="'number'" && typeof b !=="'number'")
    {
        return "Please Enter Number";
    }
    return a+b;
}

var result = add("20",30);
console.log(result);