// July 19, 2021
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
// Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
// Test.assertEquals(high('take me to semynak'), 'semynak'); 

function high(x){
    let words = x.split(' ')
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let points = []
    for (let i = 0 ; i < words.length ; i++) {
      let p = 0
      for (let j = 0 ; j < words[i].length ; j++) {
        p += alph.indexOf(words[i][j])+1
      }
      points.push(p)
    } let ind = points.indexOf(Math.max(...points))
    return words[ind]
  }





// July 20, 2021

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    // ...
  let codeWord = ''
  word = word.toLowerCase()
  for (let i = 0 ; i < word.length ; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      codeWord += '('
    } else {
      codeWord += ')'
    }
  }
  return codeWord
}
function duplicateEncodeOpt(word) {
  return word.toLowerCase().split('').map((el, i, arr)=> {
    return arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')'
  }).join('')
}




//July 21, 2021

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// Examples:
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
  // ...
  let nums = numbers.split(' ')
  let count = 0
  for (let i = 0 ; i < nums.length ; i++) {
    if(nums[i] % 2 == 0) {count++}
  }
  if (count > 1) {return nums.indexOf(nums.find(x=>x%2!=0))+1}
  else {return nums.indexOf(nums.find(x=>x%2==0))+1}
}


//Max-min arrays

// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

function solve(arr){
  //..
let maxMin = []
let i = 0
while (maxMin.length < arr.length) {
  maxMin.push(arr.sort((a,b)=>b-a)[i])
  if (maxMin.length < arr.length) {
    maxMin.push(arr.sort((a,b)=>a-b)[i])
  }
  i++
}
return maxMin
};




//July 22, 2021

//Numbers to Letters

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
  let aB = 'zyxwvutsrqponmlkjihgfedcba!? '
  return x.map((el,i,arr)=> {
    return aB[+el - 1]
  }).join('')
}