const nums = [1, 2, 3, 1, 2, 3];
const k = 2;


const duplicateElementsWithinKDistance = (nums, k) => {
    const set = new Set();

    for(let i=0;i<nums.length;i++){
        if(i>k){
            set.delete(nums[i-k-1]);
        }

        if(set.has(nums[i]))
            return true;

        set.add(nums[i]);
    }

    return false;

}

console.log(duplicateElementsWithinKDistance(nums,k));