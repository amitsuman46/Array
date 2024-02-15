let array = [1, 2, 3, 4, 5];

const rotateRight = (arr, steps) => {
    const effectiveSteps = steps%arr.length;
    const rotatedPart = arr.slice(-effectiveSteps);
    const remainingPart = arr.slice(0,arr.length-effectiveSteps);
    return rotatedPart.concat(remainingPart);
}

console.log(rotateRight(array,2));