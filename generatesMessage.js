const createMessage = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`
}
// Write a function generateMessages 
const generateMessages = (arrayNames) => { 
  return arrayNames.map(createMessage)
}
// that takes an array of names and 
// returns an array of personalised messages for each name. 

// For example, when given the array above, 
// the function should return an array with the first element 
// being the string 'Hi Anna! 50% off our best candies for you today!', 
// the second element the string 'Hi Laura! 50% off our best candies for you today!', 
// and so on.

//setting numbers = an array of numbers
let numbers = [1, 4, 9]
//setting doubles = map iterating the function with parameter num over each of the numbers in the arrayNames
let doubles = numbers.map(function(num) {
  return num * 2 //return each number * 2
})


// replacing the function createMessage within the generateMessages
// const createMessage = (name) => {
//   return `Hi ${name}! 50% off our best candies for you today!`
// }
// // Write a function generateMessages 
// const generateMessages = (arrayNames) => { 
//   arrayNames.map(name => `Hi ${name}! 50% off our best candies for you today!`)

// }