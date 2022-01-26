const createMessage = (object) => {
  return `Hi ${object.name}! ${object.discount}% off our best candies for you today!`
};

const generateMessages = (arrayNames) => {
  return arrayNames.map(createMessage);
};

// objectNames

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];

console.log(generateMessages(namesAndDiscounts))