const numbers = [12, 23, 21,12,32,23,45,54,65,45,56,41,14,41,];

function removeDuplicates(numbers) {
  const uniqueNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
      uniqueNumbers.push(numbers[i]);
    }
  }
  return uniqueNumbers;
}

const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);
