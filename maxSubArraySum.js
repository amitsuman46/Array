//kadane's algorithm for maximum subarray sum

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


const maxSubArraySum = (arr) => {
    let maxSum=0,currentSum=0;
    for(let i=0;i<arr.length;i++){
        currentSum = Math.max(arr[i],currentSum+arr[i]);
        maxSum = Math.max(maxSum,currentSum);
    }
    return maxSum;
}

console.log(maxSubArraySum(array));