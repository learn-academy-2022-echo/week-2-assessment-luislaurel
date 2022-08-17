// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("evenlyDivisible", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        expect(evenlyDivisible(object1)).toEqual("15 is divisible by three")
        expect(evenlyDivisible(object2)).toEqual("0 is divisible by three")
        expect(evenlyDivisible(object3)).toEqual("-7 is not divisible by three")
    })
})

// FAIL
//      FAIL  ./code-challenges.test.js
//   evenlyDivisible
//     ✕ takes a object as an argument and decides if the number inside it is evenly divisible by three or not (1 ms)

//   ● evenlyDivisible › takes a object as an argument and decides if the number inside it is evenly divisible by three or not

//     ReferenceError: evenlyDivisible is not defined

//       38 | describe("evenlyDivisible", () => {
//       39 |     it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
//     > 40 |         expect(evenlyDivisible(object1)).toEqual("15 is divisible by three")
//          |         ^
//       41 |         expect(evenlyDivisible(object2)).toEqual("0 is divisible by three")
//       42 |         expect(evenlyDivisible(object3)).toEqual("-7 is not divisible by three")
//       43 |     })



// b) Create the function that makes the test pass.

// PSUEDO CODE
// declare function named evenlyDivisible 
// use if statement to look for divisibility
// use string interpolation, This is a object so will be calling by key value pair
// return key value pair is/isnt divisible by three
// OUTPUT -
// "15 is divisible by three"
// "0 is divisible by three"
// "-7 is not divisible by three"

const evenlyDivisible = (obj) => {
    if (obj.number % 3 === 0) {
        return `${obj.number} is divisible by three`
    } else if (obj.number % 3 !== 0) {
        return `${obj.number} is not divisible by three`
    }
}
    //PASS 
// PASS  ./code-challenges.test.js
//   evenlyDivisible
//     ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not (2 ms)

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// describe("capWords", () => {
//     it("takes in an array of words and returns an array with all the words capitalized", () => {
//         expect(capWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(capWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango","Deduction"])
//     })
// }) 


// FAIL
//  FAIL  ./code-challenges.test.js
//   capWords
//     ✕ takes in an array of words and returns an array with all the words capitalized (1 ms)

//   ● capWords › takes in an array of words and returns an array with all the words capitalized

//     ReferenceError: capWords is not defined

//       68 | describe("capWords", () => {
//       69 |     it("takes in an array of words and returns an array with all the words capitalized", () => {
//     > 70 |         expect(capWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//          |         ^
//       71 |         expect(capWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango","Deduction"])
//       72 |     })
//       73 | }) 


// b) Create the function that makes the test pass.

// Psuedo Code
// Input ; randomNouns1, randomNouns2 
// Expected output. Original array with first letter of each word capitalized.
// ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
// creat function named capWords, use array in the parameters 
// I wanted to use .map() to return original array, use .toUpperCase() to capitalize.
// Need to access just the first letter in each string so I will use .charAt(0). This will return just a single character. So Streetlamp would become 'S'.
// I will combine (+) my single character output with .slice(1). This outputs treetlamp combining it with the first part output makes its Streetlamp. This will all return as an Array.

// const capWords = (array) =>  {
//    return array.map(value => {
//     return value.charAt(0).toUpperCase() + value.slice(1) })
// }

// console.log(capWords(randomNouns1))
// console.log(capWords(randomNouns2))

// PASS
//  PASS  ./code-challenges.test.js
//   capWords
//     ✓ takes in an array of words and returns an array with all the words capitalized (2 ms)




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// describe("firstVowel", ()=> {
//     it("takes in a string and logs the index of the first vowel", ()=> {
//         expect(firstVowel(vowelTester1)).toEqual(1)
//         expect(firstVowel(vowelTester2)).toEqual(0)
//         expect(firstVowel(vowelTester3)).toEqual(2)
//     })
// })

// FAIL
//  ● firstVowel › takes in a string and logs the index of the first vowel

//     ReferenceError: firstVowel is not defined

//       107 | describe("firstVowel", ()=> {
//       108 |     it("takes in a string and logs the index of the first vowel", ()=> {
//     > 109 |         expect(firstVowel(vowelTester1)).toEqual(1)
//           |         ^
//       110 |         expect(firstVowel(vowelTester2)).toEqual(0)
//       111 |         expect(firstVowel(vowelTester3)).toEqual(2)
//       112 |     })

//       at Object.expect (code-challenges.test.js:109:9)

// b) Create the function that makes the test pass.

// PSUEDO CODE
// declare function named firstVowel 
// create a variable that is an Array to store letters that are Vowels. AEIOU
// itterate through that array with a for loop.
// use .includes() to look for those characters i made in new array inside of given variables vowelTester1, vowelTester2, vowelTester3
// Will then return the index of it
// Output for each given variable in order
// "e" --> which would be 1
// "a" --> would be 0
// "a" --> would be "2"


// const firstVowel = (str) => {
//  const allVowels = ["a","e","i","o","u"]
//    for (let i = 0; i < str.length;i++) {
//      if(allVowels.includes(str[i])) {
//     return i
//      }
//      }
// }

// console.log(firstVowel(vowelTester1))
// console.log(firstVowel(vowelTester2))
// console.log(firstVowel(vowelTester3))

//  PASS  ./code-challenges.test.js
//   firstVowel
//     ✓ takes in a string and logs the index of the first vowel (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.447 s, estimated 1 s


// First way I tried to do it but wasn't dynamic
// 
// const firstVowel = (str) => {
//     return str.indexOf("e", 0)

// }
// console.log(firstVowel(vowelTester1))