// Sum All Numbers Question:
// You have an array of numbers. Use the reduce() function to find the sum of all the numbers in the array.
// Task:
// Write a function that sums all the numbers in the array using reduce().

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((num, i) =>{
    return num + i;
})

console.log(sum);
