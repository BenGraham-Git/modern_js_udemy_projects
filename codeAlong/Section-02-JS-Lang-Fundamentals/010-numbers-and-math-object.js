const num1 = 100;
const num2 = 50;
let val;

//  Simple Math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//  Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 3, 55, -2);
val = Math.max(2, 33, 4, 3, 55, -2);
val = Math.random();
//Random num between 1 and 20
val = Math.floor(Math.random() * 20 + 1);

console.log(val);