/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let nStr = str.toLowerCase();
  let newStr = nStr.replace(/[^a-zA-Z]/g, "");
  let max = Math.floor(newStr.length / 2);
  for (let i = 0; i < max; i++) {
    if (newStr[i] != newStr[newStr.length - i-1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
