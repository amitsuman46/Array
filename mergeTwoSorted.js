const arr1 = [1, 3, 5, 7, 9, 11];
const arr2 = [2, 4, 6, 8, 10];

const mergeTwoSortedArray = (arr1, arr2) => {
  let pointer1 = 0,
    pointer2 = 0;

  if (arr1.length == 0) return arr2;
  if (arr2.length == 0) return arr1;
  let n = arr1.length;
  let m = arr2.length;

  const newArray = [];
  while(pointer1<n && pointer2<m){
    if(arr1[pointer1]<=arr2[pointer2]){
        newArray.push(arr1[pointer1]);
        pointer1++;
    }
    else if(arr2[pointer2]<arr1[pointer1]){
        newArray.push(arr2[pointer2]);
        pointer2++;
    }
  }

  while(pointer1<n){
    newArray.push(arr1[pointer1]);
    pointer1++;
  }
  while(pointer2<m){
    newArray.push(arr2[pointer2]);
    pointer2;
  }
  return newArray;

};

console.log(mergeTwoSortedArray(arr1,arr2));