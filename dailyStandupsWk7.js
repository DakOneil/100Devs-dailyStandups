//August 16, 2021

// Given a phrase, reverse the order of the characters of each word.

// describe("Reverse Words", () => {
//  it("Should reverse words", () => {
//   assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
//  });
// });

// No Reverse Method! Unless that is your brute force...

function revWords(str) {
    let arr = str.split(' ')
    let revArr = []
    for (let i = 0 ; i < arr.length ; i++) {
        let rev = ''
        for (let j = arr[i].length-1 ; i >= 0 ; i--) {
            rev += arr[i][j]
        }
        revArr.push(rev)
    }
    return revArr.join(' ')
}




//August 17, 2021

// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

function canCutOut(note, mag) {
    const noteArr = note.split(' ')
    const magArr = mag.split(' ')
    let magObj = {}
    magArr.forEach(el=> {
        if (!magObj[el]) magObj[el] = 1
        else magObj[el]++
    })
    let noteObj = {}
    noteArr.forEach(el=> {
        if (!noteObj[el]) noteObj[el] = 1
        else noteObj[el]++
    })
    return Object.keys(noteObj).map(el=> {
      if (!magObj[el] || noteObj[el] > magObj[el]) return false
      else return true
    }).every(x=>x)
}





//August 18, 2021

// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

function twoSum(array, sum) {
    const pairs = []
    const store = {}
    for (let part1 of array) {
      const part2 = sum - part1;
      if (store.indexOf(part2) !== -1){
         pairs.push([part1, part2]);
      }
      if(!store[part2]){
        store[part1] = 1
      }else{
        pairs.push([part1,part2])
      }
    }
  
    return pairs
  }
  




//August 19, 2021

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Input: prices = [7,6,4,3,1]
// Output: 0

function maxProfit(arr) {
    let low = arr[0]
    let high 
    for (let i of arr) {
      if (arr[i] < low) low = arr[i]
    }
    for (let i = arr.indexOf(low) ; i < arr.length ; i++) {
      if (!high) high = arr[i]
      else if (arr[i] > high) high = arr[i]
    }
    let max = high - low
    console.log(low, high, max)
    return max 
  }





//August 20, 2021

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorEl(arr) {
    let cache = {}
    for (let i of arr) {
      if (!cache[i]) cache[i] = 1
      else cache[i]++
    }
    
    return Object.keys(cache).find(key => cache[key] === Object.values(cache).sort((a,b)=>b-a)[0])
  }