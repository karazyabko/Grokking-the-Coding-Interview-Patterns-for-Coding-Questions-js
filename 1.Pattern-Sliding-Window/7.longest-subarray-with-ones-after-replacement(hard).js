/*
Problem Statement
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the
longest contiguous subarray having all 1s.

  Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
*/

function getLongestOnesSubarray(arr, k) {
  if (arr.length === 0) return 0;
  let maxLen = 0;
  let requiredChanges = 0;
  let windowStart = 0;
  let storage = {};

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    storage[arr[windowEnd]] = (storage[arr[windowEnd]] || 0) + 1;
    requiredChanges = storage[0] || 0;
    if (requiredChanges > k) {
      storage[arr[windowStart]] -= 1;
      windowStart++;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }
  return maxLen;
}

console.log(getLongestOnesSubarray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); // 6
console.log(getLongestOnesSubarray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)); // 9


/*
Time Complexity: O(N) where ‘N’ is the count of numbers in the input array.
Space Complexity: O(1).
*/
