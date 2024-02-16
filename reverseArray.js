const arr = [1, 2, 34, 4, 54, 56, 6];

const reverse = (arr) => {
  return arr.reverse();
};

function reverseArrayInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];

    start++;
    end--;
  }
  return arr;
}

console.log(reverse(arr));
console.log(reverseArrayInPlace(arr));