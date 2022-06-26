/*
Problem Statement
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

  Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

  Example 2:

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

  Example 3:

Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/

function getMinLenOfSubarray(arr, sum) {
  let minLen = Number.MAX_SAFE_INTEGER;
  let windowStart = 0;
  let windowEnd = 0;
  let subarraySum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    subarraySum += arr[windowEnd];
    while (subarraySum >= sum) {
      minLen = Math.min(minLen, windowEnd - windowStart + 1);
      subarraySum -= arr[windowStart];
      windowStart++;
    }
  }
  return minLen;
}

console.log(getMinLenOfSubarray([2, 1, 5, 2, 3, 2], 7));
console.log(getMinLenOfSubarray([2, 1, 5, 2, 8], 7));
console.log(getMinLenOfSubarray([3, 4, 1, 1, 6], 8));


/*
Time Complexity: O(N)
Space Complexity: O(1).
*/
