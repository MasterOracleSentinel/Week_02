/*
Follow the instructions - Create a function called "isString" that takes 3 arguments (x1, x2, x3)
- check if each argument is a string using typeof.
- If each argument is a string, return "strings"
- If each argument is NOT a string, return "not strings"

*/

//Write your code here
////////////////////////////////////////
function isString(x1, x2, x3)
{
  //console.log('result of typeof(x1): 'typeof(x1));
  //console.log('result of typeof(x2): 'typeof(x2));
  //console.log('result of typeof(x3): 'typeof(x3));

  if ((typeof(x1) === typeof(x2)) && (typeof(x1) === typeof(x3)))
  {
    return 'strings';
  }
  else
    return 'not strings';
}
////////////////////////////////////////

//open the browser console to check results
console.log('isString results: ', isString('a', 'b', 'c'));

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = isString;
}
