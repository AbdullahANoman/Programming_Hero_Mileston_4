const products = [
    {id:1, name: "Laptop-1", year:2000, price: 200020},
    {id:2, name: "Laptop-2", year:2001, price: 203000},
    {id:3, name: "Laptop-3", year:2002, price: 2000},
    {id:4, name: "Laptop-4", year:2003, price: 30000},
    {id:5, name: "Laptop-5", year:2004, price: 24000},
    {id:6, name: "Laptop-6", year:2005, price: 25000},
]


function search(array, search)
{
    let matched = [];
    for(product of products){
        let element = product;
        if(element.name.toLowerCase().includes(search.toLowerCase()))
        {
            matched.push(element.name);
        }
    
    }
    return matched;
}


let result = search(products, "laptop");
console.log(result);