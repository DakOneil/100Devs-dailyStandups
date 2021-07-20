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