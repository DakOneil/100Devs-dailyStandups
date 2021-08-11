// August 9, 2021

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(n) {
    for (let i = 1 ; i <= n ; i++) {
        if(n%6===0) console.log('Fizz Buzz')
        else if (n%3===0) console.log('Buzz')
        else if (n%2===0) console.log('Fizz')
        else console.log(n)
    }
}
//bigO should be linear, it is a single for loop in the solution






//August 10, 2021

// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

//brute
function revChar(str) {
    return str.split('').reverse().join('')
}

//without reverse method
function manualReverseChar(str) {
    let newStr = ''
    for (let i = str.length-1 ; i >= 0 ; i--) {
        newStr += str[i]
    }
    return newStr
}






//August 11, 2021

// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 


//brute
function mostCommonChar(str) {
    let cache = {}
    for (let i = 0 ; i < str.length ; i++) {
        if (!cache[str[i]]) cache[str[i]] = 1
        else cache[str[i]]++
    }
    const arr = Object.values(cache)
    arr.sort((a,b)=>b-a)
    const max = arr[0]
    return Object.keys(cache).find(key => cache[key] === max);
}