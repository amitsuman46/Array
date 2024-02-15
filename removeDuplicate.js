const arr = [1, 2, 3, 4, 5, 6, 7, 3, 3, 2, 5, 6, 6];

//use Set

const removeDuplicate = (arr) => {
  const set = new Set(arr);
  return Array.from(set);
};

console.log(removeDuplicate(arr));
