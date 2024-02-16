//naive approach is to sort the array and return the k-th index
const arr = [8,1,3,2,6,8,7];

const kthLargestElementUsingSorting = (arr,k) => {
    arr = arr.sort((a,b)=>b-a);
    return arr[k-1];
}

const kthElementwithFindingMax = (arr,k) => {
    let max=0;
    max = arr.reduce((maxVal,curr)=>{
        if(curr>maxVal)
            return curr;
        else
            return maxVal;
    },-1)

    const newArr = new Array(max+1).fill(0);
    //map the array
    for(let i=0;i<arr.length;i++){
        newArr[arr[i]]++;
    }

    let count=0;
    // console.log(newArr)
    for(let i=newArr.length-1;i>=0;i--){
        count+=newArr[i];
        if(count>=k)
            return i;
    }
    return -1;

}
console.log(kthLargestElementUsingSorting(arr,2));
console.log(kthElementwithFindingMax(arr,2));