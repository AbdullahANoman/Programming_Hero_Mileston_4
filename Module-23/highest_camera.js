const phones = [
    {name : "Samsung", price : 22000, camera : 12, storage:16 },
    {name : "Oppo", price : 20000, camera : 8, storage:16 },
    {name : "Iphone", price : 82000, camera : 16, storage:16 },
    {name : "Htc", price : 42000, camera : 48, storage:16 },
    {name :"Xiomi", price : 32000, camera : 16, storage:16 },
]

function checkHighestCamera (p){
    var highest = p[0];
    for(let i=0; i<p.length; i++)
    {
        var element = p[i];
        if(element.camera<highest.camera){
            highest=element;
        }
    }
    return highest;
}
var result = checkHighestCamera(phones);
console.log(result);