// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
console.log(cohort.split(" "))

// a) Your answer: It will output each character in an Array. Output -> ['e','c','h','o''','2','0','2','2']

// b) Verify and explain: It outputs
// [
//   'E', 'c', 'h',
//   'o', ' ', '2',
//   '0', '2', '2'
// ]
// When using .string() it will output a string into an Array. But I could also used .split(" ") and It would split everything that isn't a space. I can also put a specific letter if i wanted to split it like that. So the output depends on the argument I pass into the parameters.
// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: It would log an undefined because we didn't use a return for it. So the argument we are trying to pass wouldn't do anything.
// b) Verify and explain:
// It doesn't not output anything because it requires a return. I if i wanted to do without writing return, I would make it a same line function. But either way would work just need to make sure we are returning it properly. Then it will output "Hello, Learn Student!"
// return `Hello, ${name}!` to fix original function.

// Same line
// const name = "Luis"

// const greeter = (name) =>  `Hello, ${name}!`

// console.log(greeter("Learn Student"))

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
console.log(multipliedByTwo)

// a) Your answer: It will return each number in the array multiplied by 2. So [8, 10, 12, 14, 16].
// b) Verify and explain:
// It returned my expected output. In this we are given a variable with an Array. Then .map() is being used to return the same length Array. Next in the parameters of .map() we are telling it take the numbers in the Array then take that number and multiply it by 2. .map() is a way to itterate through an Array so its going to go through each index.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: It will return a new Array that is shorter than the original. So the output should be all numbers with a remainder. [11, 13, 15]. 
// b) Verify and explain:
// In this variable with an Array we are using .filter() to return a new array, that is shorter than the original. It does not change original Array but it returns values from the original using conditions passed into its parameter. In this case we are telling it to take a value from the array, then use moduelo / 2 on it. The moduelo will return a remainder if there is one and here any even numbers will not have a remainder. Then the bang operator will set the opposite logical output. So for the first index, 11 there is a remainder and it is not = 0 but the ! operator will set this to true. For the rest of the ODD numbers this will be the outcome. Which is why these are the only ones being output in the new, shorter array.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: It will output the index at 0 in languages. Javascript.
// b) Verify and explain:
// In this question we are working with an Object. Inside of an Object there are key: value pairs. languages is the key, ["JavaScript", "Ruby"] is the value passed. So in order for us to access the data inside of this we must call the function first. In the parameters of the function  this is where you will pass the KEY languages into it. But value stored is an Array so in order to access we are using bracket notation with the index of the value we want to access. So JavaScript is at 0. This is what the output will be. JavaScript.
 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: It will return student = George, cohort = Echo, year = 2022
// b) Verify and explain: It output what I thought, just didn't write the proper syntax it would outcome as. Learn is a class with a constructor being used to create objects of student:name, cohort:"Echo", and year:2022. In our variable learnStudent we need to use 'new' followed by the classname in order to give this variable scope of Learn. The construct() can take an argument in this case it is name. In our new var we are passing an argument to that constructor. Learn("George"). "George" is the argument being passed into the constructor. So when learnStudent is called on its output is the class with our argument being passed into student obj. 
// Learn { student: 'George', cohort: 'Echo', year: 2022 }
