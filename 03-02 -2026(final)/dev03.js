function findSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// Array
let numbers = [10, 20, 30, 40];

// Function call
let result = findSum(numbers);

console.log("Sum of array elements =", result);
