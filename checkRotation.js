const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 1, 2];

function isRotation(arr1, arr2) {
  // Check if both arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Convert arrays to strings and check if one is a substring of the other concatenated with itself
  const concatenated = arr1.concat(arr1).join("");
  const arr2Str = arr2.join("");

  console.log(arr2Str, concatenated);

  return concatenated.includes(arr2Str);
}

console.log(isRotation(arr1, arr2));
