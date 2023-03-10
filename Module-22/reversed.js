
// function reverse(s){
//     var result1= s.split('');
//     var result =" ";
//     for(var i=result1.length-1; i>=0; i--)
//     {
//         var element = result1[i];
//         result = result + element;
//     }
//     return result;
// }


// const sentence = "I am a good boy";
// var finalResult = reverse(sentence);
// console.log(finalResult);

// REVERSE WORD

function reverse(s){
    var result1= s.split(' ');
    var result =" ";
    for(var i=result1.length-1; i>=0; i--)
    {
        var element = result1[i];
        result = result +" "+ element;
    }
    return result;
}


const sentence = "I am a good boy";
var finalResult = reverse(sentence);
console.log(finalResult);