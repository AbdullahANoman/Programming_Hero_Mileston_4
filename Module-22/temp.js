var number_1 = 10;
var number_2 =20;

console.log(number_1,number_2);

// approach : 1

// var temp =number_1;
// number_1= number_2;
// number_2 = temp;

// console.log(number_1,number_2);


// approach : 2 

[number_1, number_2]= [number_2, number_1];
console.log(number_1,number_2);