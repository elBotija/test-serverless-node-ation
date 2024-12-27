const foo = 'bar'; // var instead of const/let and missing semicolon

function badFunction(a, b) { // no space after comma
  return a + b; // missing spaces around operator and semicolon
}

// unused variables
const unused = 'unused';
console.log(foo, unused);
export default badFunction;
