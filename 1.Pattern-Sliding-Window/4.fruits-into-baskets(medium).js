/*
Problem Statement
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

  You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

  Write a function to return the maximum number of fruits in both the baskets.

  Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
  This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

function getMaxFruitsFromBaskets(fruits) {
  if (fruits.length === 0) return 0;
  let maxAmount = 0;
  let windowStart = 0;
  let map = new Map();

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let charRight = fruits[windowEnd];
    map.set(charRight, map.has(charRight) ? map.get(charRight) : 1);
    while (map.size > 2) {
      let charLeft = fruits[windowStart];
      map.set(charLeft, map.get(charLeft) - 1);
      if (map.get(charLeft) === 0) {
        map.delete(charLeft);
      }
      windowStart++;
    }
    maxAmount = Math.max(maxAmount, windowEnd - windowStart + 1);
  }
  return maxAmount;
}

console.log(getMaxFruitsFromBaskets(["A", "B", "C", "A", "C"]));
console.log(getMaxFruitsFromBaskets(["A", "B", "C", "B", "B", "C"]));

/*
Time Complexity: O(N) where ‘N’ is the number of characters in the input array.
Space Complexity: O(1)
*/
