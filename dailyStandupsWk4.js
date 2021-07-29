// Sort the odd

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    // Return a sorted array.
    let oddSort = array.filter(x=> x %2 != 0).sort((a,b)=>a-b)
    let oddCount = 0
    for (let i = 0 ; i < array.length ; i++) {
      if (array[i] % 2 != 0) array.splice(i,1,oddSort[oddCount]), oddCount++
    }
    return array
  }




//   Two Oldest Ages

//   The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  return [ages.sort((a,b)=>b-a)[1], ages.sort((a,b)=>b-a)[0]]
}




// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	// Write your code here
  return word.match(/[A-Z]/g).map(el=>word.indexOf(el))
};
//test
//quick test
//check green square
