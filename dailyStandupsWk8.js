//August 23, 2021

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

//BRUTE FORCE -- bigO = quadratic
//function goodPairs(arr) {
  // let good = []
  // for (let i = 0 ; i < arr.length-1 ; i++) {
  //   for (let j = i+1 ; j < arr.length ; j++) {
  //     if (arr[i]===arr[j] && i < j) {
  //       good.push([i,j])
  //     }
  //   }
  // }
  // return good.length
  // }

  //optimized (i think ?) -- bigO = linear
function factorialAddition(n) {
    let sum = 0
    for (let i = 1 ; i <= n ; i++) {
      sum += i
    }
    return sum
  }
function goodPairs(arr) {
  let max = arr[0]
  for (let i = 1 ; i < arr.length ; i++) {
    if (arr[i] > max) max = arr[i]
  }
  let total = 0
  for (let i = 0 ; i <= max ; i++) {
    let l = arr.filter(x=>x===i).length
    total += factorialAddition(l-1)
  }
  return total
}

//Leon's solution
// function goodPairs(nums) {

// }






//August 24, 2021

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function anyDuplicates(nums) {
  for (let i = 0 ; i < nums.length ; i++) {
    if (nums.filter(x=>x===nums[i]).length > 1) return true
  }
  return false
}

function anyDuplicates(nums) {
  let map = {}
  for (let i = 0 ; i < nums.length ; i++){
    map[nums[i]] = map[nums[i]] + 1 || 1

    if (map[nums[i]] > 1) {
      return true
    }
  }
  return false
}






//August 25, 2021

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

function(jewels, stones) {
  let count = 0
  for (let i = 0 ; i < stones.length ; i++) {
    if (jewels.includes(stones[i])) {
      count++
    } 
  }
  return count
};