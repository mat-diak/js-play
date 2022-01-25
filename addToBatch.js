const addToBatch = (array, number) => { 
  if (array.length > 5) {
    return array;
  }
  return array.concat(number)
};

console.log(addToBatch([1,2,3], 4));