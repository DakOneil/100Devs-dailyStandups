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