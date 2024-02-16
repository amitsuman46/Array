const arr = [1, 3, 0, 3, 1, 6, 0, 0, 2, 1, 4, 7];

const moveZeroAtEnd = (arr) => {
  let count = 0;

  count = arr.reduce((sum, curr) => {
    if (curr === 0) return sum+1;
    else return sum;
  },0);

  return arr.filter(element=>element!=0).concat(Array(count).fill(0));
};

console.log(moveZeroAtEnd(arr));
