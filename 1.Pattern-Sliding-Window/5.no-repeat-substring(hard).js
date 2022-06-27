/*
Problem Statement
Given a string, find the length of the longest substring which has no repeating characters.

  Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

  Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

  Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/

function getMaxNoRepeatSubstring(str) {
  if (str.length === 0) return 0;
  let maxLen = 0;
  let windowStart = 0;
  let map = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let charRight = str[windowEnd];
    if (map.has(charRight)) {
      windowStart = Math.max(windowStart, map.get(charRight) + 1);
    }
    map.set(charRight, windowEnd);
    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }
  return maxLen;
}

console.log(getMaxNoRepeatSubstring("aabccbb")); // 3
console.log(getMaxNoRepeatSubstring("abbbb")); // 2
console.log(getMaxNoRepeatSubstring("abccde")); // 3

/*
Time Complexity: O(N)
Space Complexity: O(K) where KK is the number of distinct characters in the input string.
*/
