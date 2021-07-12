// July 12, 2021
// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// Test.assertEquals(repeats([4,5,7,5,4,8]),15);
// Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
// Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
// Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
// Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);

// take in an array of numbers. ints only?
// return the sum of the only 2 numbers that occur a single time
// run a loop that will find first index and last index of a number
// if the indices are the same then its one of the two single occurring numbers
// store them in a variable
// sum the two vars

// brute force

function sumSingleNums(arr) {
    let sum = 0
    arr.forEach(el=> {
      let first = arr.indexOf(el)
      let last = arr.lastIndexOf(el)
      if (first == last) {
        sum += el
      }
    })
    return sum
  }
  
  // optimized
  
  const sumSingles = arr => arr.filter((el)=> arr.indexOf(el)==arr.lastIndexOf(el)).reduce((acc,c)=>acc+c)






// July 13, 2021
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

let str1 = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// Brute
function remDup(str) {
  return str.split(' ').filter((el,i,arr)=> {
    return el != arr[i+1]
  }).join(' ')
}
// Optimized
const removeDuplicates = str => str.split(' ').filter((el,i,arr)=>el!=arr[i+1]).join(' ')
//test case
console.log(remDup(str1))
console.log(removeDuplicates(str1))