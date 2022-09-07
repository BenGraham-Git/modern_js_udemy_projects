//  Create some arrays
const numbers = [43,56,33,44,36,5];
const numbers2 = new Array(43,56,33,44,36,5);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//  Get array length
val = numbers.length;
//  check if array
val = Array.isArray(numbers);
//  Get single value
val = numbers[3];
val = numbers[0];

//  Insert into array
numbers[2] = 100;
//  Find index of value
val = numbers.indexOf(36);

//  Mutating Arrays
//  Add on to end
numbers.push(250);
//  Add on to front
numbers.unshift(120);
//  Take off from end
numbers.pop();
//  Take off from front
numbers.shift();
//  Splice Valaues
numbers.splice(1,2);
//  Reverse
numbers.reverse();

//  Concatenate array
val = numbers.concat(numbers2);

//  Sorting arrays
val = fruit.sort();
val = numbers.sort(); // doesn't acheieve mathematical numerical order

//  Use the "compare function" achieves numerical order
val = numbers.sort(function(x, y){
  return x - y;
})
//  Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
})

//  Find less than a certain number
function under50(num){
  return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);