//To find the contiguous subarray with the largest sum and return the subarray itself
//modify Kadane's algorithm to keep track of the start and end indices of the maximum subarray

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArraySum2 = (nums) => {
  let maxSum = nums[0]; // Initialize the maximum sum to the first element
  let currentSum = nums[0]; // Initialize the current sum to the first element
  let start = 0; // Initialize the start index of the maximum subarray
  let end = 0; // Initialize the end index of the maximum subarray
  let tempStart = 0; // Temporary variable to track the start index of the current subarray
  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Calculate the current sum by either extending the subarray or starting a new subarray
    if (nums[i] > currentSum + nums[i]) {
      // If the current element is greater than the current sum plus the element itself,
      // start a new subarray from the current element
      currentSum = nums[i];
      tempStart = i;
    } else {
      // Otherwise, extend the current subarray
      currentSum += nums[i];
    }

    // Update the maximum sum and the start and end indices of the maximum subarray
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }
  return nums.slice(start, end + 1);
};

console.log(maxSubArraySum2(nums)); 