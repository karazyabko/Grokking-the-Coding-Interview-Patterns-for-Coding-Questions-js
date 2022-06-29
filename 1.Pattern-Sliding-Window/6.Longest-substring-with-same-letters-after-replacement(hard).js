/*
Problem Statement

Leetcode: https://leetcode.com/problems/longest-repeating-character-replacement/

Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

  Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

  Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

  Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/

function getLongestSubstringAfterReplacement(str, k) {
  if (str.length === 0) return 0;
  let maxLen = 0;
  let maxFrequency = 0;
  let requiredChanges = 0;
  let windowStart = 0;
  let storage = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const keyInStorage = str[windowEnd];
    storage[keyInStorage] = (storage[keyInStorage] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, storage[keyInStorage]);
    requiredChanges = windowEnd - windowStart + 1 - maxFrequency;
    if (requiredChanges > k) {
      storage[str[windowStart]] -= 1;
      windowStart++;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }
  return maxLen;
}

console.log(getLongestSubstringAfterReplacement("aabccbb", 2)); // 5
console.log(getLongestSubstringAfterReplacement("abbcb", 1)); // 4
console.log(getLongestSubstringAfterReplacement("abccde", 1)); // 3

/*
Time Complexity: O(N) where ‘N’ is the number of letters in the input string.
Space Complexity: O(26)
*/
