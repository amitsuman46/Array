const arr = [0, 1, 2, 1, 0, 1, 2, 1, 1, 0, 0];

const sortArray = (nums) => {
    let low = 0; // 0 pointer
    let high = nums.length - 1; // 2 pointer
    let i = 0;
  
    while (i <= high) {
      if (nums[i] === 0) {
        [nums[i], nums[low]] = [nums[low], nums[i]];
        i++;
        low++;
      } else if (nums[i] === 2) {
        [nums[i], nums[high]] = [nums[high], nums[i]];
        high--; 
      } else {
        i++;
      }
    }
  };
console.log(sortArray(arr))
console.log(arr);