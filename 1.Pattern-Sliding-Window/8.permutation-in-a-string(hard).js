/*
Problem Challenge 1

Leetcode: https://leetcode.com/problems/permutation-in-string/

Permutation in a String (hard)
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six
permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.

Example 1:

Input: string="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

  Example 2:

Input: string="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

  Example 3:

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.

  Example 4:

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.
*/

function isStringIncludesPatternPermutation(str, pattern) {
  if (str.length === 0 || pattern.length === 0 || pattern.length > str.length)
    return false;
  let len = 0;
  let windowStart = 0;
  let patternStorage = {};
  let patternLength = pattern.length;
  let result = false;

  for (let index = 0; index < pattern.length; index++) {
    const char = pattern[index];
    patternStorage[char] = (patternStorage[char] || 0) + 1;
  }

  const patternStorageKeys = Object.keys(patternStorage);

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let charRight = str[windowEnd];

    if (patternStorageKeys.includes(charRight)) {
      patternStorage[charRight] -= 1;
      if (patternStorage[charRight] === 0) {
        len += 1;
      }
    }

    if (windowEnd - windowStart + 1 > patternLength) {
      let charLeft = str[windowStart];
      if (patternStorageKeys.includes(charLeft)) {
        if (patternStorage[charLeft] === 0) {
          len -= 1;
        }
        patternStorage[charLeft] += 1;
      }
      windowStart++;
    }

    if (len === patternStorageKeys.length) {
      result = true;
    }
  }
  return result;
}

console.log(isStringIncludesPatternPermutation("oidbcaf", "abc")); // true
console.log(isStringIncludesPatternPermutation("odicf", "dc")); // false
console.log(isStringIncludesPatternPermutation("bcdxabcdy", "bcdyabcdx")); // true
console.log(isStringIncludesPatternPermutation("aaacb", "abc")); // true


/*
Time Complexity: O(N + M) where ‘N’ and ‘M’ are the number of characters in the input string and the pattern respectively.
Space Complexity : O(M) since in the worst case, the whole pattern can have distinct characters which will go into the HashMap.
*/
