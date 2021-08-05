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

  // another solution with minor change

  function dbSort(a){
    // Code here
      let nums = a.filter(x=>typeof x === 'number').sort((b,c)=>b-c)
      let strs = a.filter(x=>typeof x === 'string')
      return nums.concat(strs.sort())
    }



// August 4, 2021

// Find the middle element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

var gimme = function (inputArray) {
  // Implement this function
  return inputArray.findIndex(x=> x > inputArray.sort((a,b)=>a-b)[0] && x < inputArray.sort((a,b)=>a-b)[2])
};

// old codwars sol

var gimme = function (arr) {
  // Implement this function
  if ((arr[0] < arr[1] && arr[1] < arr[2]) || (arr[2] < arr[1] && arr[1] < arr[0])) return 1
  else if ((arr[0] < arr[2] && arr[2] < arr[1]) || (arr[1]<arr[2] && arr[2] < arr[0])) return 2
  else return 0
};


//August 5, 2021

//Absent vowel

// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function absentVowel(x){ 
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0 ; i < vowels.length ; i++ ) {
    if (!x.split('').includes(vowels[i])) return i
  }
}