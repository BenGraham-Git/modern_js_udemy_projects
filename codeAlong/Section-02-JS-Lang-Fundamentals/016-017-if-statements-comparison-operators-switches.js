// If statments & comparison operators

const id = 100;

// //  EQUAL TO may utilise type coersion
// if(id == 100){
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }

// //  NOT EQUAL TO
// if(id != 101){
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }

// //  EQUAL TO - checks type as well as value ie 100 != '100'
// if(id === 100){
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }
// //  NOT EQUAL TO - checks type as well as value ie 100 != '100'
// if(id !== 100){
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }

// // Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// // GREATER OR LESS THAN
// if(id > 200){
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// const color = 'yellow';

// if(color === 'red'){
//   console.log('color is red');
// } else if(color === 'blue'){
//   console.log('color is blue');
// } else {
//   console.log('color is neither red nor blue')
// }

const name = 'Steve';
const age = 20;

if(age > 0 && age <= 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR ? :
console.log(id === 100 ? 'correct' : 'incorrect')


//// SWITCHES ////

const color = 'yellow';

switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is neither red not blue');
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is a ${day}`);