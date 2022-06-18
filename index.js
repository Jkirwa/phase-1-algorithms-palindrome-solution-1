function isPalindrome(word) {
  // Write your algorithm here
  let palindrome=reversedString(word)
  return word===palindrome;
}
function reversedString(word){
  return word.split("").reverse().join("");
}


/* 
  Add your pseudocode here

  reverse the input string

  if the reversed string is the same as the input
  return true
else
  return false

*/

/*
  Add written explanation of your solution here
  Declared variable palindrome that stores the reversed word
  The function reverseString changes the string to an array and the array is reversed and joined
  The reversed word is then checked if its a palindrome it returns true else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
