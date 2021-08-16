//August 14, 2021

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