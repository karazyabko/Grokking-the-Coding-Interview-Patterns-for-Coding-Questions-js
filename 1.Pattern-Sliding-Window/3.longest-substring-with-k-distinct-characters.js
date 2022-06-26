/*
Problem Statement #
Given a string, find the length of the longest substring in it with no more than K distinct characters.

  Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

  Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

  Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

function longestSubstringWithKDistinctChars(str, k) {
  if (str === null || str.length === 0 || k === 0) return 0;
  let maxLen = 0;
  let windowStart = 0;
  let map = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let charRight = str[windowEnd];
    map.set(charRight, map.has(charRight) ? map.get(charRight) : 1);
    while (map.size > k) {
      let charLeft = str[windowStart];
      map.set(charLeft, map.get(charLeft) - 1);
      if (map.get(charLeft) === 0) {
        map.delete(charLeft);
      }
      windowStart++;
    }
    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }
  return maxLen;
}

console.log(longestSubstringWithKDistinctChars("araaci", 2));
console.log(longestSubstringWithKDistinctChars("araaci", 1));
console.log(longestSubstringWithKDistinctChars("cbbebi", 3));

/*
Time Complexity: O(N) where ‘N’ is the number of characters in the input string.
Space Complexity: O(K)
*/
