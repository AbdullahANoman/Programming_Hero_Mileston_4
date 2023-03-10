const names = ["Noman", "Rahim", "karim", "Jarina" , "Sakina", "karina","Noman", "Jarina"];

function isDuplicate (name){
    newName = [];
    for(var i=0; i<name.length; i++)
    {
        var element = name[i];
        if(newName.includes(element) == false){
            newName.push(element);
        }
    }
    return newName;
}

var NewName = isDuplicate(names);
console.log(NewName);
