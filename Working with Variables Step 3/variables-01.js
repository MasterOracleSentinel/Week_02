/*Instructions
 - Greet your friend by printing a message to the console.
*/
//your code here
let myFriend = 'Barney';
///////////////
function greetings() {
  //also your code here
  ///////////////
  
  //let greeting = "Greetings " + myFriend
  return `Greetings ${myFriend}`;
}

//leave this line unchanged to console log the results
console.log('results: ', greetings());

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = greetings;
}
