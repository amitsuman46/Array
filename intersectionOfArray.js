const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const intersectionOfArray = (arr1, arr2) => {
  const set2 = new Set(arr2);
  const result = [];

  for(let i=0;i<arr1.length;i++){
    if(set2.has(arr1[i]))
        result.push(arr1[i]);
  }
  return result;
};

function findIntersection(arr1, arr2) {
    let set = new Set(arr1);
    
    let intersection = arr2.filter(element => set.has(element));
    
    return intersection;
}


console.log(intersectionOfArray(arr1,arr2),findIntersection(arr1,arr2));
