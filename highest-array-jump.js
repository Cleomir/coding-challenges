const array1 = [5, -3, 4, 6, -8, 12];
const array2 = [-3, -2, 1, 4, 6, -10, 9];
const array3 = [10, 5, -20, -2, 3, 4];

// Function to calculate the highest sum of elements in an array
function calculateHighestArrayJump(array, step) {
  // Initialize the maximum sum to 0
  let maxSum = 0;

  // Iterate over the array, stopping step elements before the end
  for (let i = 0; i < array.length - step; i++) {
    // Initialize the sum for this starting point to 0
    let tempSum = 0;

    // Iterate over the array starting at i, incrementing by step each time
    for (let j = i; j < array.length; j = j + step) {
      // Add the current element to the sum
      tempSum += array[j];
    }

    // If the sum for this starting point is greater than the current maximum, update the maximum
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  // Return the maximum sum found
  return maxSum;
}

console.log(highestArrayJump(array1, 2)); // 18
console.log(highestArrayJump(array2, 3)); // 13
console.log(highestArrayJump(array3, 2)); // 7
