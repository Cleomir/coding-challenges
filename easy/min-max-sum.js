// Calculate the minimum and maximum sum of 4 elements in an array of 5 elements
function miniMaxSum(arr) {
  // Calculate the total sum of the array
  const totalSum = arr.reduce((acc, current) => acc + current, 0);
  let minSum = totalSum;
  let maxSum = 0;

  for (const element of arr) {
    // Calculate the sum of the array without the current element
    let tempSum = totalSum - element;

    // Compare the sum with the minimum and maximum sum found so far and update them if necessary
    if (tempSum < minSum) {
      minSum = tempSum;
    }
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]); // 10 14
miniMaxSum([7, 69, 2, 221, 8974]); // 299 9271
