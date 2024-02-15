function getRandomNumber(min, max) {
    // Generate a random floating-point number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();
    
    // Scale and shift the range to [min, max]
    const scaledNumber = Math.floor(randomNumber * (max - min + 1)) + min;
    
    return scaledNumber;
}

// Generate a random number between 1 and 10
const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);

const arr = [1,2,3,4,5,6]
const shuffleArray = (arr) => {
    for(let i=0;i<arr.length;i++){
        const j = Math.floor(Math.random() * (i+1));
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr;
}

for(let i=0;i<10;i++){
    console.log(shuffleArray(arr));
}

function shuffleArray2(arr) {
    // Create a copy of the original array
    const shuffledArray = arr.slice();
    
    // Sort the array using a random comparator
    shuffledArray.sort(() => Math.random() - 0.5);
    
    return shuffledArray;
}
