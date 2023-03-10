const lyrics = "Ami bondhu kala Pakhi tumi  jo kih . bosonto kale amai bolte paro nai ";



lyricsLowerCase = lyrics.toLowerCase();
var find = "pakhi"
var result = lyricsLowerCase.includes('pakhi');


var doesExistInOneLine = lyrics.toLowerCase().includes(find.toLowerCase());
console.log(doesExistInOneLine);
// index of 
var index = lyrics.indexOf("kailla");
console.log(index);

if(index !== -1)
{
    console.log("that's the search string has been exist in this ");
}
else
{
    console.log("don't exist ");
}
//starts with
var firstString = lyricsLowerCase.startsWith("ami");
console.log(firstString);

// ends with 
const file = "Ami Noman Tumi K";
var fileLowerCase = file.toLowerCase();

var endsString = fileLowerCase.endsWith("k");
console.log("Ends With Result : " ,endsString);