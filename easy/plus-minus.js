// Calculate the fractions of its elements that are positive, negative, and are zeros.
function plusMinus(arr) {
  const positiveNumbers = [];
  const negativeNumbers = [];
  const zeroes = [];

  for (let number of arr) {
    if (number > 0) {
      positiveNumbers.push(number);
    } else if (number === 0) {
      zeroes.push(number);
    } else {
      negativeNumbers.push(number);
    }
  }

  console.log(positiveNumbers.length / arr.length);
  console.log(negativeNumbers.length / arr.length);
  console.log(zeroes.length / arr.length);
}

plusMinus([-4, 3, -9, 0, 4, 1]); // 0.5, 0.3333333333333333, 0.16666666666666666
