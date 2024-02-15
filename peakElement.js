const nums = [1, 2, 3, 4, 5, 6, 7, 8,5, 1];

const peakElement = (arr) => {
    for(let i=0;i<arr.length;i++){
        if((i==0||arr[i]>arr[i-1]) && ((i==arr.length-1)|| arr[i]>arr[i+1]))
        return i;
    }
};

console.log(nums[peakElement(nums)],peakElement(nums));

const peakElementBinary = (arr) => {
    let n = arr.length;
    if(n==1) return 0;

    if(arr[0]>arr[1]) return 1;
    if(arr[n-1]>arr[n-2]) return n-1;

    let low = 1, high = n-2;
    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1])
            return mid;
        else if(arr[mid]>arr[mid-1])
            low = mid=1;
        else
            high = mid-1;
    }
    return -1
}
console.log(nums[peakElementBinary(nums)],peakElement(nums));