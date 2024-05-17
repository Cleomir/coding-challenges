function findMaxNumber1(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

function findMaxNumber2(arr) {
  return Math.max(...arr);
}

console.log(findMaxNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10
console.log(findMaxNumber1([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // 10
console.log(findMaxNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10
console.log(findMaxNumber2([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // 10
