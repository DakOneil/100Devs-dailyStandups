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