//Given an array of integers, find the smallest missing positive integer.
const nums = [3, 4, -1, 1];

const smallestMissingPositive = (arr) => {

    const set = new Set(arr);
    
    let smallestMissing = 1;
  
    while (set.has(smallestMissing)) {
      smallestMissing++;
    }
    
    return smallestMissing;

}

console.log(smallestMissingPositive(nums));