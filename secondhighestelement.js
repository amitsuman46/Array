const arr = [6,7, 1, 2, 3, 4, 5, 5,8];

const secondHighestMax = (arr) => {
  let max = 0,
    secondmax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondmax = max;
      max = arr[i];
    }
  }
  return secondmax;
};


console.log(secondHighestMax(arr));