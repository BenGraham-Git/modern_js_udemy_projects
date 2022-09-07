// FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Doe'){
  // if(typeof firstName === 'undefined'){firstName = 'John'} //ES5
  // if(typeof lastName === 'undefined'){lastName = 'Doe'} //ES5
  // console.log('hello');
  return 'hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS
const square = function(x){
  return x*x;
};
// console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello ' + name);
// })('Brad');

// PROPERTY METHODS 
// WHEN A FUNCTION IS PUT INSIDE OF AN OBJECT IT'S CALLED A METHOD

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();

