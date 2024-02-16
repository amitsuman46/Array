const nums = [2, 2, 1, 1, 1, 2, 2];

const majorityElement = (nums) => {
  let count = 0,
    ele = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      ele = nums[i];
    }
    if ((ele = nums[i])) count++;
    if (ele != nums[i]) count--;
  }

  return ele;
};


console.log(majorityElement(nums));