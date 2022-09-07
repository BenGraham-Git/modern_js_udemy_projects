//  Template Literals
const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

function hello(){
  return 'hello';
}

//  Without Template Strings (es5)
html =  '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + ' </li>' +
        '<li>Job: ' + job + ' </li>' +
        '<li>City: ' + city + ' </li>' +
        '</ul>';

// With template strings/literals
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;


document.body.innerHTML = html;