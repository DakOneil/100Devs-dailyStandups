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