// We need a function that checks whether 
// a string
const checkLength = (string) => {
  // is at least 10 letters long
  return string.length <= 10
};

// Now declare 
// a function filterLongNumbers 
// takes an array of phone numbers.
const filterLongNumbers = (numbers_array) => {
  // return only numbers that contain 10 characters or less.
  for (let index = 0; index < numbers_array.length; index++) {
    return numbers_array[index]
  }
};
// It should make use of the function checkLength written previously.



// Our function is 
// is it less or equal to 10?
// we wanna see all numbers that are less or equal to 10

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'AAAA#####AAAA#87@768767382672',
  '4763687363',
  '4763687363'
]

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index])
}