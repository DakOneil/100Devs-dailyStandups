// August 2, 2021


// Lost number in number sequence

// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
    // your code
    mixArr.sort((a,b)=>a-b)
    for (let i = 0 ; i < arr.length ; i++) {
      if (arr[i] !== mixArr[i]) {
        return arr[i]
      }
    }
    return 0
  }




// August 3, 2021

//Double Sort

// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

function dbSort(a){
  // Code here
    let nums = a.filter(x=>typeof x === 'number')
    let strs = a.filter(x=>typeof x === 'string')
    return nums.sort((b,c)=>b-c).concat(strs.sort())
  }