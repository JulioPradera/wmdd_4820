labs for week 5

lab 1)

rewrite the isPrime function to test if a number is prime or not using recursion

here is one possible solution from last weeks lab:

    function isPrime (n) {
      if (n === 1) {
        return false
      } else if ( n === 2) {
        return true
      } else {
        for (let i = 2; i < n; i++ ) {
          if (n % i === 0) {
            return false
          }
        }
        return true
      }
    }

    console.log(isPrime(631))

lab 2)

write a small program that finds all of the numbers between two given numbers.
use recursion. you probably want to store your numbers in an array

example:

func(1, 6) // [3, 4, 5]

lab 3)

using the fs examples write a small program that allows you to add data to an
object stored in a file.

using process.argv your first argument is the key and all following arguments
are data stored in that key. you should be able to pass more than 2 arguments,
like this: node app.js foodILike coffee cheesecake kale apples.
whether the data is stored as an array or string is up to you.

lab 4)

rewrite the above code so that you can update the value of a given key.
