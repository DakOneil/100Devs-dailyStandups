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