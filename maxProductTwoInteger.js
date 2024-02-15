//one we can use sorting

//another one is we can find max and secondmax

const arr = [4,2,1,4,6,8,1,3];

const maxProductOfTwoIntegerInArray = (arr) => {

    let max=0, secondmax=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondmax=max;
            max = arr[i];
        }
    }
    console.log(max,secondmax)
    return max*secondmax;
}

console.log(maxProductOfTwoIntegerInArray(arr))