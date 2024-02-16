const arr1 = [1, 3];
const arr2 = [2];

const findMedian = (arr1, arr2) => {
  const mergedArray = mergeTwoSortedArray(arr1, arr2);

  // Calculate the median based on the length of the merged array
  const n = mergedArray.length;
  if (n % 2 === 0) {
    // If the length is even, return the average of the middle two elements
    const mid = n / 2;
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    // If the length is odd, return the middle element
    const mid = Math.floor(n / 2);
    return mergedArray[mid];
  }
};

const mergeTwoSortedArray = (arr1, arr2) => {
  let pointer1 = 0,
    pointer2 = 0;

  if (arr1.length == 0) return arr2;
  if (arr2.length == 0) return arr1;
  let n = arr1.length;
  let m = arr2.length;

  const newArray = [];
  while (pointer1 < n && pointer2 < m) {
    if (arr1[pointer1] <= arr2[pointer2]) {
      newArray.push(arr1[pointer1]);
      pointer1++;
    } else if (arr2[pointer2] < arr1[pointer1]) {
      newArray.push(arr2[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < n) {
    newArray.push(arr1[pointer1]);
    pointer1++;
  }
  while (pointer2 < m) {
    newArray.push(arr2[pointer2]);
    pointer2;
  }
  return newArray;
};

console.log(findMedian(arr1, arr2)); 