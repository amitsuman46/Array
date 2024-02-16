const nums = [10, 9, 2, 5, 3, 7, 101, 18];

function longestIncreasingSubsequence(nums) {
    if (nums.length === 0) {
        return 0; // Empty array, LIS length is 0
    }

    // Initialize an array to store the length of LIS ending at each index
    const dp = new Array(nums.length).fill(1);

    // Iterate through the array
    for (let i = 1; i < nums.length; i++) {
        // Check all previous elements to find the longest increasing subsequence ending at the current index
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // If nums[i] is greater than nums[j], it can be included in the increasing subsequence ending at i
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // Find the maximum value in the dp array, which represents the length of the longest increasing subsequence
    return Math.max(...dp);
}

console.log(longestIncreasingSubsequence(nums)); // Output: 4 (the longest increasing subsequence is [2, 3, 7, 101])
